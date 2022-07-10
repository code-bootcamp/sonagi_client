import styled from "@emotion/styled";
import React, { useState } from "react";
import { Fade as Hamburger } from "hamburger-react";

const Wrapper = styled.div``;

const WrapToggle = styled.div``;

const WrapTitle = styled.div``;

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

const Label = styled.div`
  padding-left: 10px;
  font-size: 1.1rem;
`;

export default function Hambuger() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Wrapper>
      <Hamburger
        direction="left"
        duration={0.8}
        toggled={isOpen}
        toggle={setOpen}
      />
      {isOpen && (
        <WrapToggle>
          <WrapTitle>
            <Title>소설</Title>
            <Label>최근 본 작품</Label>
            <Label>찜한 작품</Label>
            <Label>나의 작품</Label>
          </WrapTitle>
          <WrapTitle>
            <Title>구매</Title>
            <Label>결제 내역</Label>
            <Label>포인트 충전</Label>
          </WrapTitle>
          <WrapTitle>
            <Title>개인</Title>
            <Label>1:1 문의</Label>
            <Label>회원정보 변경</Label>
          </WrapTitle>
        </WrapToggle>
      )}
    </Wrapper>
  );
}
