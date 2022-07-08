import { useRouter } from "next/router";
import LoginPresenter from "./login.presenter";

export default function LoginContainer() {
  const router = useRouter();

  const onClickMain = () => {
    router.push("/");
  };

  const onClickMoveToSignUp = () => {
    router.push("/signup");
  };

  return (
    <LoginPresenter
      onClickMain={onClickMain}
      onClickMoveToSignUp={onClickMoveToSignUp}
    />
  );
}
