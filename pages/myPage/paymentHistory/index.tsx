import styled from "@emotion/styled";
import MyPageSideBarContainer from "../../../src/components/commons/myPageSideBar/MyPageSideBar.container";
import PaymentHistoryContainer from "../../../src/components/units/myPage/paymentHistory/paymentHistory.container";

const Wrapper = styled.div`
  display: flex;
`;

export default function PaymentHistory() {
  return (
    <Wrapper>
      <MyPageSideBarContainer />
      <PaymentHistoryContainer />
    </Wrapper>
  );
}
