import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import RecentWatchPresenter from "../../../src/components/units/myPage/recentWatch/RecentWatch.presenter";

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
`;

const Margin = styled.div`
  margin: 0px 0px 199px 130px;
`;

export default function RecentWatch() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <Margin>
        <RecentWatchPresenter />
      </Margin>
    </Wrapper>
  );
}
