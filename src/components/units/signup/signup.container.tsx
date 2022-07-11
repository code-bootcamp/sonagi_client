import { useRouter } from "next/router";
import SignUpPresenter from "./signup.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation, useQuery } from "@apollo/client";
import { CREATE_USER, SEND_PHONE } from "./Signup.queries";
import { useForm } from "react-hook-form";

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
  pwdCheck: yup.string().oneOf([yup.ref("password"), null]),
  phone: yup.string().required("필수 입력 사항"),
});

export default function SignUpContainer() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);
  const { data: SendPhone } = useQuery(SEND_PHONE, {
    variables: { phone: "" },
  });
  // const [AuthPhoneOK] = useQuery(AUTH_PHONE_OK);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
  });

  const onClickMoveToMain = () => {
    router.push("/");
  };

  const onClickSendPhone = (data: any) => {
    try {
      const result = SendPhone({ phone: data.phone });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickSignUp = (data: any) => {
    console.log(data);

    if (data.password === data.passwordCheck) {
      try {
        const result = createUser({
          variables: {
            createUserInput: {
              name: data.name,
              nickName: data.nickName,
              email: data.email,
              phone: data.phone,
              pwd: data.pwd,
            },
          },
        });
        alert("회원가입 성공");
        router.push("/login");
        console.log(result);
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
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
