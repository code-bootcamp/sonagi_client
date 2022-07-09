import React from "react";
import * as S from "./InquireWrite.styles";
export default function InquireWritePresenter() {
  return (
    <S.Wrapper>
      <S.MainTitle>1 : 1 문의</S.MainTitle>
      <S.WrapperInquire>
        <S.WrapTitle>
          <S.TitleWrapper>
            <S.Label>제목</S.Label>
            <S.Require>*</S.Require>
          </S.TitleWrapper>
          <S.LabelInput type="text" />
        </S.WrapTitle>
        <S.WrapTitle>
          <S.TitleWrapper>
            <S.Label>이메일 주소</S.Label>
            <S.Require>*</S.Require>
          </S.TitleWrapper>
          <S.LabelInput type="text" />
        </S.WrapTitle>
        <S.WrapTitle>
          <S.TitleWrapper>
            <S.Label>문의 내용</S.Label>
            <S.Require>*</S.Require>
          </S.TitleWrapper>
          <S.ContentsInput />
        </S.WrapTitle>
        <S.WrapButton>
          <S.Button>문의하기</S.Button>
        </S.WrapButton>
      </S.WrapperInquire>
    </S.Wrapper>
  );
}
