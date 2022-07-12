// 아임포트로 결제 연동하기

// 1. 아임포트 사용하려면 head 부분에 아임포트 라이브러리를 추가해줘야 하는데
// 넥스트에서는 html에 직접 접근하기 어렵기 때문에 next에서 제공하는 head태그를 import하기

import styled from "@emotion/styled";
import { useState } from "react";

const PayMentWrapper = styled.div`
  width: 464px;
  border-radius: 20px;
  position: absolute;
  background-color: #ffffff;
  left: 50vh;
  top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border: 1px solid #cccccc;
  z-index: 50;
`;

const MoneyButton = styled.div`
  background-color: #ff3c8d;
  color: #ffffff;
  width: 350px;
  height: 40px;
  text-align: center;
  padding-top: 10px;
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
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  padding-top: 50px;
`;

const MySelect = styled.div`
  padding: 10px;
  width: 350px;
  height: 40px;
  margin: 30px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #828282;
  border: none;
  border-bottom: 2px solid;
  &:focus {
    outline: none;
  }
  background-repeat: no-repeat;
  background-position: right;
  cursor: pointer;
  display: inline-block;
`;

const MyLi = styled.li`
  padding: 7px 0px 5px 0px;
  margin-top: 10px;
  list-style: none;
  color: #828282;
  &:hover {
    font-weight: 700;
    font-size: 17px;
  }
`;

const MyOption = styled.div``;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  top: 0;
  left: 0;
`;

const MoneyWrapper = styled.div`
  margin-top: 20px;
`;

export default function PaymentPage(props) {
  const [money, setMoney] = useState(0);
  const [isSelect, setIsSelect] = useState(false);

  const onChangeMoney = (event: any) => {
    setMoney(event?.target.value);
  };

  const onClickMoney = (event) => {
    setMoney(event?.target.value);
    setIsSelect((prev) => !prev);
  };

  const handleCancel = () => {
    props.setIsModalVisible(false);
    setIsSelect(false);
    setMoney(0);
  };

  const SelectMoney = () => {
    setIsSelect((prev) => !prev);
  };

  return (
    <>
      <Overlay onClick={handleCancel} />
      <PayMentWrapper>
        <CancelImg onClick={handleCancel} src="/delete.png"></CancelImg>
        <Title>충전하실 금액을 선택해주세요</Title>
        <MoneyWrapper>
          <MySelect onChange={onChangeMoney}>
            <MyOption onClick={SelectMoney}>{money}</MyOption>
            {isSelect && (
              <>
                <MyLi onClick={onClickMoney} value="100">
                  100
                </MyLi>
                <MyLi onClick={onClickMoney} value="500">
                  500
                </MyLi>
                <MyLi onClick={onClickMoney} value="2000">
                  2000
                </MyLi>
                <MyLi onClick={onClickMoney} value="5000">
                  5000
                </MyLi>
              </>
            )}
          </MySelect>
        </MoneyWrapper>
        <MoneyButton>충전하기</MoneyButton>
      </PayMentWrapper>
    </>
  );
}
