import { useRouter } from "next/router";
import SignUpPresenter from "./signup.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { AUTH_PHONE_OK, CREATE_USER, SEND_PHONE } from "./signup.queries";
import { useForm } from "react-hook-form";
import { useState } from "react";

const schema = yup.object({
  name: yup
    .string()
    .max(8, "이름은 8글자 이내 문자열입니다.")
    .required("필수 입력 사항"),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("필수 입력 사항"),
  nickName: yup
    .string()
    .max(6, "닉네임은 6글자 이내 문자열입니다.")
    .required("필수 입력 사항"),
  pwd: yup
    .string()
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리 문자열입니다"
    )
    .required("필수 입력 사항"),
  pwdCheck: yup.string().oneOf([yup.ref("pwd"), null]),
});

export default function SignUpContainer() {
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

  const onClickMoveToMain = () => {
    router.push("/");
  };

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
    console.log(Agree1, Agree2);
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
    <SignUpPresenter
      onClickMoveToMain={onClickMoveToMain}
      onClickSignUp={onClickSignUp}
      onClickSendPhone={onClickSendPhone}
      onChangeToken={onChangeToken}
      onChangePhone={onChangePhone}
      onClickAuthPhone={onClickAuthPhone}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      phoneCheck={phoneCheck}
      setAgree1={setAgree1}
      setAgree2={setAgree2}
    />
  );
}
