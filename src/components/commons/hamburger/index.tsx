import styled from "@emotion/styled";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";
import useMoveToPage from "../../../commons/hooks/UseMoveToPage";
import { breakPoints } from "../../../commons/styles/media";

const Wrapper = styled.div`
  width: 150px;
`;

const WrapToggle = styled.div`
  position: absolute;
  width: 150px;
  padding: 10px;
  background-color: #ffffff;
  border: 1px solid #2277d8;
  border-radius: 10px;
`;

const WrapTitle = styled.div`
  padding: 10px;
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    justify-content: right;
  }
`;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Label = styled.div`
  font-size: 1.1rem;
  cursor: pointer;
`;

export default function HamburgerPage() {
  const { onClickMoveToPage } = useMoveToPage();
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <HamburgerWrapper>
        <Hamburger
          direction="right"
          duration={0}
          size={24}
          toggled={isOpen}
          toggle={setOpen}
        />
      </HamburgerWrapper>
      {isOpen && (
        <WrapToggle>
          <WrapTitle>
            <Title>소설</Title>
            <Label onClick={onClickMoveToPage("/myPage/recentWatch")}>
              최근 본 작품
            </Label>
            <Label onClick={onClickMoveToPage("/myPage/likeNovel")}>
              찜한 작품
            </Label>
            <Label onClick={onClickMoveToPage("/myPage/donateNovel")}>
              후원 작품
            </Label>
            <Label onClick={onClickMoveToPage("/myPage/myNovel")}>
              나의 작품
            </Label>
          </WrapTitle>
          <WrapTitle>
            <Title>구매</Title>
            <Label onClick={onClickMoveToPage("/myPage/paymentHistory")}>
              결제 내역
            </Label>
            <Label onClick={onClickMoveToPage("/myPage/pointCharge")}>
              포인트 충전
            </Label>
          </WrapTitle>
          <WrapTitle>
            <Title>개인</Title>
            <Label onClick={onClickMoveToPage("/myPage/inquire")}>
              1:1 문의
            </Label>
            <Label onClick={onClickMoveToPage("/myPage/profileChange")}>
              회원정보 변경
            </Label>
            <Label onClick={onClickMoveToPage("/myPage/passwordChange")}>
              비밀번호 변경
            </Label>
          </WrapTitle>
        </WrapToggle>
      )}
    </Wrapper>
  );
}
