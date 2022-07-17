import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import LikeNovelContainer from "../../../src/components/units/myPage/likeNovel/LikeNovel.Container";

const Wrapper = styled.div`
  display: flex;
`;

export default function LikeNovelPage() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <LikeNovelContainer />
    </Wrapper>
  );
}
