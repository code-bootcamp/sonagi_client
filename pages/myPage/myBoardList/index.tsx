import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyBoardListContainer from "../../../src/components/units/myPage/myBoardList/myBoardList.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function MyBoardListPage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <MyBoardListContainer />
    </Wrapper>
  );
}
