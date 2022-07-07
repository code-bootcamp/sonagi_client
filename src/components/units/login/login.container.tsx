import { useRouter } from "next/router";
import LoginPresenter from "./login.presenter";

export default function LoginContainer() {
  const router = useRouter();

  const onClickMain = () => {
    router.push("/");
  };

  return <LoginPresenter onClickMain={onClickMain} />;
}
