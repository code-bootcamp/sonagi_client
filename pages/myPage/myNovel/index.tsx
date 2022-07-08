import styled from "@emotion/styled";
import { breakPoints } from "../../../src/commons/styles/media";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyNovelPresenter from "../../../src/components/units/myPage/myNovel/MyNovel.presenter";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;
const Margin = styled.div`
  /* margin: 60px 0px 240px 130px; */
  width: 80%;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Break = styled.div`
  width: 20%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function MyNovel() {
  return (
    <Wrapper>
      <Break>
        <MyPageSideBarContainer />
      </Break>
      <Margin>
        <MyNovelPresenter />
      </Margin>
    </Wrapper>
  );
}
