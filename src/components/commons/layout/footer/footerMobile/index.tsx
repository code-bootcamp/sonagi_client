import styled from "@emotion/styled";
import React from "react";

const Wrapper = styled.div`
  padding: 0 35px;
  background-color: #2277d8;
  height: 77px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 28px;
  height: 28px;
`;

export default function FooterMobile() {
  return (
    <Wrapper>
      <>
        <Image src="/footer/footer01.png" />
        <Image src="/footer/footer02.png" />
        <Image src="/footer/footer03.png" />
        <Image src="/footer/footer04.png" />
        <Image src="/footer/footer05.png" />
      </>
    </Wrapper>
  );
}
