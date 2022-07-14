// 아임포트로 결제 연동하기

// 1. 아임포트 사용하려면 head 부분에 아임포트 라이브러리를 추가해줘야 하는데
// 넥스트에서는 html에 직접 접근하기 어렵기 때문에 next에서 제공하는 head태그를 import하기
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const PayMentWrapper = styled.div`
  width: 464px;
  border-radius: 20px;
  position: absolute;
  background-color: #ffffff;
  margin-right: 22%;
  top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #cccccc;
  z-index: 50;

  @media ${breakPoints.mobile} {
    margin-right: 2%;
  }
`;

const MoneyButton = styled.div`
  background-color: #2277d8;
  color: #ffffff;
  width: 300px;
  height: 40px;
  text-align: center;
  padding-top: 8px;
  margin-top: 20px;
  margin-bottom: 25px;
  border-radius: 10px;
  cursor: pointer;
`;

const CancelImg = styled.img`
  width: 20px;
  margin-left: 400px;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  padding: 30px 0px 10px 0px;
`;

const Contents = styled.div`
  padding-bottom: 10px;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  left: 0;
  top: 0;
  opacity: 40%;
  background-color: #cccccc;
`;

export const CANCEL_PAYMENT = gql`
  mutation cancelPayment($cancelPaymentInput: CancelPaymentInput!) {
    cancelPayment(cancelPaymentInput: $cancelPaymentInput) {
      id
      impUid
      amount
    }
  }
`;

export default function PaymentPage(props) {
  const [cancelPayment] = useMutation(CANCEL_PAYMENT);
  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  const impUid = String(props.data?.impUid);
  const merchantUid = String(props.data?.merchantUid);

  console.log(impUid, merchantUid);

  const onClickCancelPayment = async () => {
    props.setIsModalVisible(false);

    try {
      const result = await cancelPayment({
        variables: {
          cancelPaymentInput: {
            impUid,
            merchantUid,
          },
        },
      });
      console.log(result);
      alert("환불이 완료되었습니다");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Overlay onClick={handleCancel} />
      <PayMentWrapper>
        <CancelImg onClick={handleCancel} src="/modal/delete.png"></CancelImg>
        <Title>포인트를 환불하시겠습니까?</Title>
        <Contents>환불 시 소나기의 유료컨텐츠 이용이 어렵습니다</Contents>
        <MoneyButton onClick={onClickCancelPayment}>환불하기</MoneyButton>
      </PayMentWrapper>
    </>
  );
}
