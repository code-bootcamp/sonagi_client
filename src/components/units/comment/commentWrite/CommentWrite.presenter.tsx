import React from "react";
import * as S from "./CommentWrite.styles";
export default function CommentWritePresenter() {
  return (
    <S.Wrapper>
      <S.WrapTitle>
        <S.CommentIcon src="/comment/insert_comment.png" />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.WrapTitle>
      <S.WrapContents>
        <S.ContentsInput type="textArea" placeholder="댓글을 남겨주세요" />
        <S.Wraplength>
          <S.Length>30/100</S.Length>
          <S.CommentButton>댓글 등록</S.CommentButton>
        </S.Wraplength>
      </S.WrapContents>
    </S.Wrapper>
  );
}
