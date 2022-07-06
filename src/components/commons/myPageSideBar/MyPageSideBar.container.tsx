import { useRouter } from "next/router";
import MyPageSideBarPresenter from "./MyPageSideBar.presenter";

export default function MyPageSideBarContainer() {
  const router = useRouter();

  const onClickMoveToMyPage = () => {
    router.push("/myPage");
    console.log("마이페이지");
  };

  const onClickMoveToRecentWatch = () => {
    router.push("/recentWatch");
    console.log("최근본상품");
  };

  return (
    <MyPageSideBarPresenter
      onClickMoveToRecentWatch={onClickMoveToRecentWatch}
      onClickMoveToMyPage={onClickMoveToMyPage}
    />
  );
}
