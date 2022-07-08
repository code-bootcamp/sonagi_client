import React from "react";
import Button01 from "../../../commons/buttons/01";
import Button02 from "../../../commons/buttons/02";
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
        <Button02 title="취소" />
        <Button01 title="등록" />
      </S.WrapButton>
    </S.Wrapper>
  );
}
