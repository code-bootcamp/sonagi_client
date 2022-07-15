import React from "react";
import * as S from "./CommentWrite.styles";
export default function CommentWritePresenter(props) {
  return (
    <S.Wrapper>
      <S.WrapTitle>
        <S.CommentIcon src="/comment/insert_comment.png" />
        <S.CommentTitle>댓글</S.CommentTitle>
      </S.WrapTitle>
      <S.WrapContents>
        <S.ContentsInput
          type="textArea"
          placeholder="댓글을 남겨주세요"
          onChange={props.onChangeContents}
        />
        <S.Wraplength>
          <S.Length>30/100</S.Length>
          <S.CommentButton onClick={props.onClickRegisterComment}>
            댓글 등록
          </S.CommentButton>
        </S.Wraplength>
      </S.WrapContents>
    </S.Wrapper>
  );
}
