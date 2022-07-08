import { useRouter } from "next/router";
import SignUpPresenter from "./signup.presenter";

export default function SignUpContainer() {
  const router = useRouter();

  const onClickMoveToMain = () => {
    router.push("/");
  };

  return <SignUpPresenter onClickMoveToMain={onClickMoveToMain} />;
}
