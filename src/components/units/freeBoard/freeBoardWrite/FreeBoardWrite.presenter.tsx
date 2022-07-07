import React from "react";
import * as S from "./FreeBoardWrite.styles";
export default function FreeBoardWritePresenter() {
  return (
    <S.Wrapper>
      <S.WrapTitle>
        <S.MainTitle>자유게시판</S.MainTitle>
        <S.SubTitle>글쓰기</S.SubTitle>
      </S.WrapTitle>
      <S.WrapperTitle>
        <S.Label>제목</S.Label>
        <S.TitleInput type="text" placeholder="제목을 입력하세요" />
      </S.WrapperTitle>
      <S.WrapperLabel>
        <S.Label>내용</S.Label>
        <S.ContentsInput type="text" placeholder="내용을 입력하세요" />
      </S.WrapperLabel>
      <S.WrapperLabel>
        <S.Label>사진 첨부</S.Label>
        <S.Image>+</S.Image>
      </S.WrapperLabel>
      <S.WrapButton>
        <S.ClickButton>취소</S.ClickButton>
        <S.ClickButton>등록</S.ClickButton>
      </S.WrapButton>
    </S.Wrapper>
  );
}
