import NoticeDetailPresenter from "./NoticeDetail.presenter";
import { useRouter } from "next/router";

export default function NoticeDetailContainer() {
  const router = useRouter();

  const onClickMoveToList = () => {
    router.push("/notice");
  };

  return <NoticeDetailPresenter onClickMoveToList={onClickMoveToList} />;
}
