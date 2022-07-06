import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import PaymentHistoryPresenter from "../../../src/components/units/paymentHistory/paymentHistory.presenter";

const Wrapper = styled.div`
  display: flex;
`;

export default function PaymentHistory() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <PaymentHistoryPresenter />
    </Wrapper>
  );
}
