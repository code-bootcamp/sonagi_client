import React from "react";
import * as S from "./CommentWrite.styles";

export default function ReadCommentWritePresenter(props) {
  return (
    <form
      onSubmit={
        props.isEdit
          ? props.handleSubmit(props.onClickUpdateComment)
          : props.handleSubmit(props.onClickComment)
      }
    >
      <S.Wrapper>
        <S.HeadWrapper onClick={props.onClickGoList}>댓글로 가기</S.HeadWrapper>
        <S.WrapTitle></S.WrapTitle>
        <S.WrapContents>
          <S.ContentsInput
            placeholder="댓글 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하지 말아주세요."
            {...props.register("contents")}
            defaultValue={props.el?.contents}
          />
          <S.CommentButton>
            {props.isEdit ? "댓글 수정" : "댓글 등록"}
          </S.CommentButton>
        </S.WrapContents>
      </S.Wrapper>
    </form>
  );
}
