import React from "react";
import * as S from "./FreeBoardDetail.styles";
export default function FreeBoardDetailPresenter() {
  return (
    <S.Wrapper>
      <S.MainTitle>자유게시판</S.MainTitle>
      <S.WrapTitleInfo>
        <S.Title>작성 제목</S.Title>
        <S.WrapUserInfo>
          <S.UserLabel>작성자</S.UserLabel>
          <S.Date>2022.07.04</S.Date>
          <S.Date>조회 60</S.Date>
          <S.Date>추천 10</S.Date>
          <S.ReportIcon src="/freeBoard/report.png" />
        </S.WrapUserInfo>
      </S.WrapTitleInfo>
      <S.Contents type="text" />
      <S.Button>목록으로</S.Button>
    </S.Wrapper>
  );
}
