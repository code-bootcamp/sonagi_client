import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import PaymentHistoryPresenter from "../../../src/components/units/myPage/paymentHistory/paymentHistory.presenter";

const Wrapper = styled.div`
  display: flex;
  width: 1200px;
`;

const Margin = styled.div`
  margin: 30px 0px 0px 130px;
`;

export default function PaymentHistory() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <Margin>
        <PaymentHistoryPresenter />
      </Margin>
    </Wrapper>
  );
}
