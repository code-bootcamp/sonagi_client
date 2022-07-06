import styled from "@emotion/styled";
import MyPageSideBar from "../../src/components/commons/myPageSideBar/MyPageSideBar.presenter";
import RecentWatchPresenter from "../../src/components/units/recentWatch/RecentWatch.presenter";

const Wrapper = styled.div`
  display: flex;
`;

export default function RecentWatch() {
  return (
    <Wrapper>
      <MyPageSideBar />
      <RecentWatchPresenter />
    </Wrapper>
  );
}
