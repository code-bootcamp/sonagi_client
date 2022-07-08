import styled from "@emotion/styled";
import { breakPoints } from "../../src/commons/styles/media";
import MyPageSideBarContainer from "../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import MyPageContainer from "../../src/components/units/myPage/MyPage.container";

const Div = styled.div`
  display: flex;
  /* width: 1200px; */
  width: 100%;
`;

const Margin = styled.div`
  margin: 60px 0px 130px 130px;
`;

const Break = styled.div`
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function MyPage() {
  return (
    <Div>
      <Break>
        <MyPageSideBarContainer />
      </Break>
      <Margin>
        <MyPageContainer />
      </Margin>
    </Div>
  );
}
