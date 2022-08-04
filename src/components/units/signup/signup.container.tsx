import { useRouter } from "next/router";
import SignUpPresenter from "./signup.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@apollo/client";
import { AUTH_PHONE_OK, CREATE_USER, SEND_PHONE } from "./signup.queries";
import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import { Modal } from "antd";

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
  const [sendPhone, setSendPhone] = useState(false);
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

  const onChangePhone = (event: ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const onChangeToken = (event: ChangeEvent<HTMLInputElement>) => {
    setToken(event.target.value);
  };

  const onClickSendPhone = () => {
    if (!phone) Modal.warning({ content: "휴대폰번호를 입력해주세요" });
    else if (phone.length !== 11)
      Modal.warning({ content: "올바른 번호를 입력해주세요" });
    else {
      setPhoneCheck(false);
      try {
        SendPhone({
          variables: {
            phone,
          },
        }).then((result) => setToken(result.data.SendPhone));
        console.log(phone);
        setSendPhone(true);
      } catch (error: any) {
        Modal.error({ content: "인증번호 전송에 실패했습니다" });
      }
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
      Modal.error({ content: "인증 실패" });
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
        Modal.success({ content: "회원가입이 완료되었습니다" });
        router.push("/login");
      } catch (error: any) {
        Modal.error({ content: error.message });
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
      sendPhone={sendPhone}
      phoneCheck={phoneCheck}
      setAgree1={setAgree1}
      setAgree2={setAgree2}
    />
  );
}
