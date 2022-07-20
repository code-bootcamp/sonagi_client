// 아임포트로 결제 연동하기

// 1. 아임포트 사용하려면 head 부분에 아임포트 라이브러리를 추가해줘야 하는데
// 넥스트에서는 html에 직접 접근하기 어렵기 때문에 next에서 제공하는 head태그를 import하기
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { message } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

const PayMentWrapper = styled.div`
  width: 464px;
  border-radius: 20px;
  position: absolute;
  background-color: #ffffff;
  top: 100px;
  left: 35%;
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

const SubTitle = styled.div`
  padding-bottom: 20px;
`;

const Contents = styled.input`
  width: 50%;
  padding: 5px;
  margin-bottom: 20px;
  border: 1px solid #2277d2;
  border-radius: 10px;
  font-size: 0.8rem;
  color: #848484;

  &:focus {
    outline: none;
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

export const DONATE_POINT = gql`
  mutation donatePoint($donateInput: DonatePaymentPointInput!) {
    donatePoint(donateInput: $donateInput) {
      id
      point
      createAt
      status {
        id
        description
      }
    }
  }
`;

export default function DonatePage(props) {
  const [donatePoint] = useMutation(DONATE_POINT);
  const [point, setPoint] = useState();
  const handleCancel = () => {
    props.onClickDonate(false);
  };

  const onChangeDonate = (event) => {
    setPoint(event?.target.value);
  };

  const onClickDonate = async () => {
    console.log(point);
    props.onClickDonate(false);

    try {
      const result = await donatePoint({
        variables: {
          donateInput: {
            novelID: props.novelID,
            point: Number(point),
          },
        },
      });
      console.log(result);
      // alert("후원 감사합니데이~~!");
      message.info("후원감사합니다");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Overlay onClick={handleCancel} />
      <PayMentWrapper>
        <CancelImg onClick={handleCancel} src="/modal/delete.png"></CancelImg>
        <Title>작가와 소설을 후원하시겠습니까?</Title>
        <SubTitle>후원 금액을 입력해주세요</SubTitle>
        <Contents type="text" onChange={onChangeDonate} />
        <MoneyButton onClick={onClickDonate}>후원하기</MoneyButton>
      </PayMentWrapper>
    </>
  );
}
