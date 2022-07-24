import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyPageContainer from "../../src/components/units/myPage/MyPage.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function MyPage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <MyPageContainer />
    </Wrapper>
  );
}
