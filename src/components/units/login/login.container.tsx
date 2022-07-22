import { useRouter } from "next/router";
import LoginPresenter from "./login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";
import { LOGIN_USER } from "./login.queries";
import { useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { Modal } from "antd";

const schema = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다")
    .required("필수 입력 사항"),
  pwd: yup
    .string()
    .matches(
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/,
      "비밀번호는 영문, 숫자, 특수문자를 포함한 8~16자리 문자열입니다"
    )
    .required("필수 입력 사항"),
});

export default function LoginContainer() {
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  console.log(accessToken);
  const [loginUser] = useMutation(LOGIN_USER);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickMain = () => {
    router.push("/");
  };

  const onClickMoveToSignUp = () => {
    router.push("/signup");
  };

  const onClickLogin = async (data: any) => {
    try {
      const result = await loginUser({
        variables: {
          loginInput: {
            email: data.email,
            pwd: data.pwd,
          },
        },
      });
      setAccessToken(result.data?.Login);
      localStorage.setItem("refreshToken", result.data?.Login);
      Modal.success({ content: "소나기에 오신 걸 환영합니다" });
      window.location.replace("/");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <LoginPresenter
      onClickMain={onClickMain}
      onClickMoveToSignUp={onClickMoveToSignUp}
      onClickLogin={onClickLogin}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
