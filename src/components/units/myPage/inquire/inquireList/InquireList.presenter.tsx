import React from "react";
import Hambuger from "../../../../commons/hambuger";
import * as S from "./InquireList.styles";

export default function InquireListPresenter() {
  return (
    <S.Wrapper>
      <S.WrapHambuger>
        <S.MainTitle>1 : 1 문의</S.MainTitle>
        <Hambuger />
      </S.WrapHambuger>
      <S.WrapperList>
        <S.WrapInfo>
          <S.Title>글 제목입니다</S.Title>
          <S.Date>2022.07.04</S.Date>
        </S.WrapInfo>
        <S.Answer>답변 완료</S.Answer>
      </S.WrapperList>
      <S.WrapperList>
        <S.WrapInfo>
          <S.Title>글 제목입니다</S.Title>
          <S.Date>2022.07.04</S.Date>
        </S.WrapInfo>
        <S.Answer>답변 완료</S.Answer>
      </S.WrapperList>
      <S.WrapperList>
        <S.WrapInfo>
          <S.Title>글 제목입니다</S.Title>
          <S.Date>2022.07.04</S.Date>
        </S.WrapInfo>
        <S.Answer>답변 완료</S.Answer>
      </S.WrapperList>
      <S.WrapperList>
        <S.WrapInfo>
          <S.Title>글 제목입니다</S.Title>
          <S.Date>2022.07.04</S.Date>
        </S.WrapInfo>
        <S.Answer>답변 완료</S.Answer>
      </S.WrapperList>
      <S.WrapperList>
        <S.WrapInfo>
          <S.Title>글 제목입니다</S.Title>
          <S.Date>2022.07.04</S.Date>
        </S.WrapInfo>
        <S.Answer>답변 완료</S.Answer>
      </S.WrapperList>
      <S.WrapperList>
        <S.WrapInfo>
          <S.Title>글 제목입니다</S.Title>
          <S.Date>2022.07.04</S.Date>
        </S.WrapInfo>
        <S.Answer>답변 완료</S.Answer>
      </S.WrapperList>
      <S.WrapperList>
        <S.WrapInfo>
          <S.Title>글 제목입니다</S.Title>
          <S.Date>2022.07.04</S.Date>
        </S.WrapInfo>
        <S.Answer>답변 완료</S.Answer>
      </S.WrapperList>
      <S.WrapButton>
        <S.Button>문의하기</S.Button>
      </S.WrapButton>
    </S.Wrapper>
  );
}
