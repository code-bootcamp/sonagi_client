import styled from "@emotion/styled";
import React from "react";
import useMoveToPage from "../../../../../commons/hooks/UseMoveToPage";

const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  right: 0px;
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
const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.span`
  font-size: 0.69rem;
  color: #fff;
  margin-top: 5px;
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
        <ColumnWrap>
          <Image src="/footer/footer01.png" onClick={onClickMoveToPage("/")} />
          <Text>홈</Text>
        </ColumnWrap>
        <ColumnWrap>
          <Image
            src="/footer/footer02.png"
            onClick={onClickMoveToPage("/search")}
          />
          <Text>검색</Text>
        </ColumnWrap>
        <ColumnWrap>
          <Image
            src="/footer/footer03.png"
            onClick={onClickMoveToPage("/notice")}
          />
          <Text>내 서재</Text>
        </ColumnWrap>
        <ColumnWrap>
          <Image
            src="/footer/footer04.png"
            onClick={onClickMoveToPage("/myPage/likeNovel")}
          />
          <Text>선호작</Text>
        </ColumnWrap>
        <ColumnWrap>
          <Image
            src="/footer/footer05.png"
            onClick={onClickMoveToPage("/myPage")}
          />
          <Text>마이</Text>
        </ColumnWrap>
      </>
    </Wrapper>
  );
}
