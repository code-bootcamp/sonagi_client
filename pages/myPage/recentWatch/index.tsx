import styled from "@emotion/styled";
import { breakPoints } from "../../../src/commons/styles/media";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import RecentWatchPresenter from "../../../src/components/units/myPage/recentWatch/RecentWatch.presenter";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  @media ${breakPoints.mobile} {
    justify-content: center;
    width: 2%;
  }
`;

const Margin = styled.div`
  margin: 0px 0px 199px 130px;
  width: 80%;
`;

const Break = styled.div`
  width: 20%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function RecentWatch() {
  return (
    <Wrapper>
      <Break>
        <MyPageSideBarContainer />
      </Break>
      <Margin>
        <RecentWatchPresenter />
      </Margin>
    </Wrapper>
  );
}
