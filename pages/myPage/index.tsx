import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyPagePresenter from "../../src/components/units/myPage/MyPage.presenter";

const Div = styled.div`
  display: flex;
`;

export default function MyPage() {
  return (
    <Div>
      <MyPageSideBarContainer />
      <MyPagePresenter />
    </Div>
  );
}
