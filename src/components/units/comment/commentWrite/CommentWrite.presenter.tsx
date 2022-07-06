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
        <S.ContentsInput
          type="textArea"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <S.Wraplength>
          <S.Length>30/100</S.Length>
          <S.CommentButton>댓글 등록</S.CommentButton>
        </S.Wraplength>
      </S.WrapContents>
    </S.Wrapper>
  );
}