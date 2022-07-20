import styled from "@emotion/styled";
import React from "react";
import useMoveToPage from "../../../../../commons/hooks/UseMoveToPage";

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
  cursor: pointer;
`;

export default function FooterMobile() {
  const { onClickMoveToPage } = useMoveToPage();

  return (
    <Wrapper>
      <>
        <Image src="/footer/footer01.png" onClick={onClickMoveToPage("/")} />
        <Image
          src="/footer/footer02.png"
          onClick={onClickMoveToPage("/search")}
        />
        <Image
          src="/footer/footer03.png"
          onClick={onClickMoveToPage("/notice")}
        />
        <Image
          src="/footer/footer04.png"
          onClick={onClickMoveToPage("/myPage/likeNovel")}
        />
        <Image
          src="/footer/footer05.png"
          onClick={onClickMoveToPage("/myPage")}
        />
      </>
    </Wrapper>
  );
}
