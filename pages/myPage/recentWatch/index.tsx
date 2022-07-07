import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import RecentWatchPresenter from "../../../src/components/units/recentWatch/RecentWatch.presenter";

const Wrapper = styled.div`
  display: flex;
`;

export default function RecentWatch() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <RecentWatchPresenter />
    </Wrapper>
  );
}
