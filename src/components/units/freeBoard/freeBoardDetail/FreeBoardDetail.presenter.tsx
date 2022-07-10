import React from "react";
import Button01 from "../../../commons/buttons/01";
import * as S from "./FreeBoardDetail.styles";
export default function FreeBoardDetailPresenter() {
  return (
    <S.Wrapper>
      <S.RowWrap>
        <S.MainTitle>자유게시판</S.MainTitle>
        <S.TitleLine></S.TitleLine>
      </S.RowWrap>
      <S.Title>작성 제목</S.Title>
      <S.WriterWrapper>
        <S.Writer>작성자</S.Writer>
        <S.Date>2022.08.04</S.Date>
        <S.Date>조회 60</S.Date>
        <S.Date>추천 10</S.Date>
        <S.ReportIcon src="/freeBoard/report.png" />
      </S.WriterWrapper>
      <S.Contents />
      <S.ButtonWrapper>
        <Button01 title="목록으로" />
      </S.ButtonWrapper>
    </S.Wrapper>
  );
}
