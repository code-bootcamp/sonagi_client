import useMoveToPage from "../../../commons/hooks/UseMoveToPage";
import MyPageSideBarPresenter from "./MyPageSideBar.presenter";

export default function MyPageSideBarContainer() {
  const { onClickMoveToPage } = useMoveToPage();

  return <MyPageSideBarPresenter onClickMoveToPage={onClickMoveToPage} />;
}
