import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import RecentWatchContainer from "../../../src/components/units/myPage/recentWatch/RecentWatch.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function RecentWatch() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <RecentWatchContainer />
    </Wrapper>
  );
}
