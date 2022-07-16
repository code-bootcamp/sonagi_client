import React from "react";
import * as S from "./CommentWrite.styles";
export default function DetailCommentWritePresenter(props) {
  return (
    <S.Wrapper>
      <S.WrapTitle>
        <S.WrapStar>
          <S.CommentTitle>내가 남긴 별점</S.CommentTitle>
          <S.Star>{props.star}.0</S.Star>
          <S.CommentTitle> 점</S.CommentTitle>
        </S.WrapStar>
        <S.Rates onChange={props.setStar} star={props.star} />
      </S.WrapTitle>
      <S.WrapContents>
        <S.ContentsInput
          placeholder="리뷰 작성 시 광고 및 욕설, 비속어나 타인을 비방하는 문구를 사용하지 말아주세요."
          onChange={props.onChangeContents}
          // defaultValue={props.el?.contents}
        />
        {/* <S.Wraplength>
          <S.Length>30/100</S.Length>
          <S.CommentButton onClick={props.onClickComment}>
            {props.isEdit ? "댓글 수정" : "댓글 등록"}
          </S.CommentButton>
        </S.Wraplength> */}
        <S.CommentButton onClick={props.onClickComment}>
          리뷰 남기기
        </S.CommentButton>
      </S.WrapContents>
    </S.Wrapper>
  );
}
