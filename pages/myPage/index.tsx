import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyPageContainer from "../../src/components/units/myPage/MyPage.container";

const Div = styled.div`
  display: flex;
  width: 1200px;
`;

const Margin = styled.div`
  margin: 60px 0px 130px 130px;
`;

export default function MyPage() {
  return (
    <Div>
      <MyPageSideBarContainer />
      <Margin>
        <MyPageContainer />
      </Margin>
    </Div>
  );
}
