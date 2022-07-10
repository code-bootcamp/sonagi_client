import { useRouter } from "next/router";
import NoticeWritePresenter from "./NoticeWrite.presenter";

export default function NoticeWriteContainer() {
  const router = useRouter();

  const onClickList = () => {
    router.push("/event");
  };

  return <NoticeWritePresenter onClickList={onClickList} />;
}
