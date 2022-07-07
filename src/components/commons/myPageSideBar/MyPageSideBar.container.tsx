import { useRouter } from "next/router";
import MyPageSideBarPresenter from "./MyPageSideBar.presenter";

export default function MyPageSideBarContainer() {
  const router = useRouter();

  const onClickMoveToMyPage = () => {
    router.push("/myPage");
    console.log("마이페이지");
  };

  const onClickMoveToRecentWatch = () => {
    router.push("/myPage/recentWatch");
    console.log("최근본상품");
  };

  const onClickMoveToMyNovel = () => {
    router.push("/myPage/myNovel");
  };

  return (
    <MyPageSideBarPresenter
      onClickMoveToRecentWatch={onClickMoveToRecentWatch}
      onClickMoveToMyPage={onClickMoveToMyPage}
      onClickMoveToMyNovel={onClickMoveToMyNovel}
    />
  );
}
