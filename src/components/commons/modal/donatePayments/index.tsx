// 아임포트로 결제 연동하기

// 1. 아임포트 사용하려면 head 부분에 아임포트 라이브러리를 추가해줘야 하는데
// 넥스트에서는 html에 직접 접근하기 어렵기 때문에 next에서 제공하는 head태그를 import하기
import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useState } from "react";
import { Modal } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

const Wrapper = styled.div``;

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
  font-size: 1.25rem;
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
  opacity: 20%;
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

export default function DonatePage(props: any) {
  const [donatePoint] = useMutation(DONATE_POINT);
  const [point, setPoint] = useState();

  const handleCancel = () => {
    props.setIsDonate(false);
  };

  const onChangeDonate = (event: any) => {
    setPoint(event?.target.value);
  };

  const onClickDonate = async () => {
    try {
      await donatePoint({
        variables: {
          donateInput: {
            novelID: props.novelID,
            point: Number(point),
          },
        },
      });
      Modal.success({ content: "후원감사합니다" });
      props.setIsDonate(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <Wrapper>
      <Overlay onClick={handleCancel} />
      <PayMentWrapper>
        <CancelImg onClick={handleCancel} src="/modal/delete.png" />
        <Title>작가와 소설을 후원하시겠습니까?</Title>
        <SubTitle>후원 금액을 입력해주세요</SubTitle>
        <Contents type="text" onChange={onChangeDonate} />
        <MoneyButton onClick={onClickDonate}>후원하기</MoneyButton>
      </PayMentWrapper>
    </Wrapper>
  );
}
