import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyNovelContainer from "../../../src/components/units/myPage/myNovel/MyNovel.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function MyNovel() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <MyNovelContainer />
    </Wrapper>
  );
}
