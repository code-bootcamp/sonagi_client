import SocialLoginPresenter from "./SocialLogin.presenter";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { AUTH_PHONE_OK, CREATE_USER, SEND_PHONE } from "./SocialLogin.queries";

const schema = yup.object({
  nickName: yup
    .string()
    .max(6, "닉네임은 6글자 이내 문자열입니다.")
    .required("필수 입력 사항"),
});

export default function SocialLoginContainer() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);
  const [phone, setPhone] = useState("");
  const [token, setToken] = useState("");
  const [phoneCheck, setPhoneCheck] = useState(false);
  const [Agree1, setAgree1] = useState(false);
  const [Agree2, setAgree2] = useState(false);

  const [SendPhone] = useMutation(SEND_PHONE);
  const [AuthPhoneOK] = useMutation(AUTH_PHONE_OK);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onChangePhone = (event: any) => {
    setPhone(event.target.value);
  };

  const onChangeToken = (event: any) => {
    setToken(event.target.value);
  };

  const onClickSendPhone = () => {
    setPhoneCheck(false);
    try {
      SendPhone({
        variables: {
          phone,
        },
      }).then((result) => setToken(result.data.SendPhone));
      console.log(phone);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickAuthPhone = () => {
    try {
      const result = AuthPhoneOK({
        variables: {
          phoneInput: {
            phone,
            token,
          },
        },
      });
      console.log(result);
      setPhoneCheck(true);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSignUp = (data: any) => {
    if (Agree1 && Agree2) {
      try {
        const result = createUser({
          variables: {
            createUserInput: {
              name: data.name,
              nickName: data.nickName,
              email: data.email,
              phone,
              pwd: data.pwd,
            },
          },
        });
        console.log(data);
        console.log(result);
        alert("회원가입 완료");
        router.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <SocialLoginPresenter
      onChangePhone={onChangePhone}
      onChangeToken={onChangeToken}
      onClickSendPhone={onClickSendPhone}
      onClickAuthPhone={onClickAuthPhone}
      onClickSignUp={onClickSignUp}
      phoneCheck={phoneCheck}
      setAgree1={setAgree1}
      setAgree2={setAgree2}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
