import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyNovelPresenter from "../../../src/components/units/myNovel/MyNovel.presenter";

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
`;
const Margin = styled.div`
  margin: 60px 0px 240px 130px;
`;

export default function MyNovel() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <Margin>
        <MyNovelPresenter />
      </Margin>
    </Wrapper>
  );
}
