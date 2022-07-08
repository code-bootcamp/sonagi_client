import styled from "@emotion/styled";
import { breakPoints } from "../../../src/commons/styles/media";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import PaymentHistoryPresenter from "../../../src/components/units/myPage/paymentHistory/paymentHistory.presenter";

const Wrapper = styled.div`
  display: flex;
  /* width: 1200px; */
  width: 100%;
`;

const Margin = styled.div`
  width: 80%;
  margin: 30px 0px 0px 130px;
`;

const DIV = styled.div`
  width: 20%;
  @media ${breakPoints.tablet} {
  }
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export default function PaymentHistory() {
  return (
    <Wrapper>
      <DIV>
        <MyPageSideBarContainer />
      </DIV>
      <Margin>
        <PaymentHistoryPresenter />
      </Margin>
    </Wrapper>
  );
}
