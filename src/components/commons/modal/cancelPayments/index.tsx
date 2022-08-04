// 아임포트로 결제 연동하기

// 1. 아임포트 사용하려면 head 부분에 아임포트 라이브러리를 추가해줘야 하는데
// 넥스트에서는 html에 직접 접근하기 어렵기 때문에 next에서 제공하는 head태그를 import하기
import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useState } from "react";
import { breakPoints } from "../../../../commons/styles/media";

const PayMentWrapper = styled.div`
  width: 464px;
  border-radius: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #cccccc;
  z-index: 50;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media ${breakPoints.mobile} {
    width: 350px;
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

  @media ${breakPoints.mobile} {
    width: 55%;
  }
`;

const CancelImg = styled.img`
  width: 20px;
  align-self: flex-end;
  cursor: pointer;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  padding: 30px 0px 10px 0px;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

const SubTitle = styled.div`
  padding-bottom: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

const Contents = styled.input`
  width: 60%;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #2277d2;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #848484;

  &:focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    width: 70%;
  }
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
      reason
    }
  }
`;

export const FETCH_PAYMENTS = gql`
  query fetchPaymentsInUser($page: Int!) {
    fetchPaymentsInUser(page: $page) {
      payments {
        id
        impUid
        merchantUid
        amount
        createAt
        user {
          id
          name
          nickName
        }
        product {
          point
          id
          name
          price
          point
        }
      }
      count
    }
  }
`;

export default function PaymentPage(props: any) {
  const { data } = useQuery(FETCH_PAYMENTS, { variables: { page: 1 } });
  console.log(data);
  const [cancelPayment] = useMutation(CANCEL_PAYMENT);
  const [reason, setReason] = useState("");
  const handleCancel = () => {
    props.setIsModalVisible(false);
  };

  const impUid = String(props.CancelData?.impUid);
  const merchantUid = String(props.CancelData?.merchantUid);

  const onChangeReason = (event: any) => {
    setReason(event.target.value);
  };

  const onClickCancelPayment = async () => {
    props.setIsModalVisible(false);

    try {
      await cancelPayment({
        variables: {
          cancelPaymentInput: {
            impUid,
            merchantUid,
            reason,
          },
        },
        refetchQueries: [
          {
            query: FETCH_PAYMENTS,
            variables: { page: 1 },
          },
        ],
      });
      Modal.success({ content: "환불이 완료되었습니다" });
    } catch (error) {
      Modal.error({ content: (error as Error).message });
    }
  };

  return (
    <>
      <Overlay onClick={handleCancel} />
      <PayMentWrapper>
        <CancelImg onClick={handleCancel} src="/modal/delete.png"></CancelImg>
        <Title>포인트를 환불하시겠습니까?</Title>
        <SubTitle>환불 사유를 입력해주세요</SubTitle>
        <Contents type="text" onChange={onChangeReason} />
        <MoneyButton onClick={onClickCancelPayment}>환불하기</MoneyButton>
      </PayMentWrapper>
    </>
  );
}
