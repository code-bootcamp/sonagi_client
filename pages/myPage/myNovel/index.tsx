import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyNovelPresenter from "../../../src/components/units/myPage/myNovel/MyNovel.presenter";

const Wrapper = styled.div`
  display: flex;
`;

export default function MyNovel() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <MyNovelPresenter />
    </Wrapper>
  );
}
