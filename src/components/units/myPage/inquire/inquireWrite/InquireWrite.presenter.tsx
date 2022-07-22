import React from "react";
import * as S from "./InquireWrite.styles";
import { IInquireWritePresenterProps } from "./InquireWrite.types";
export default function InquireWritePresenter(
  props: IInquireWritePresenterProps
) {
  return (
    <S.Wrapper>
      <form onSubmit={props.handleSubmit(props.onClickCreateQuestion)}>
        <S.MainTitle>1 : 1 문의</S.MainTitle>
        <S.WrapperInquire>
          <S.WrapTitle>
            <S.TitleWrapper>
              <S.Label>제목</S.Label>
              <S.Require>*</S.Require>
            </S.TitleWrapper>
            <S.LabelInput {...props.register("title")} type="text" />
            <S.Error>{props.formState.errors.title?.message}</S.Error>
          </S.WrapTitle>
          <S.WrapTitle>
            <S.TitleWrapper>
              <S.Label>문의 내용</S.Label>
              <S.Require>*</S.Require>
            </S.TitleWrapper>
            <S.ContentsInput {...props.register("contents")} />
            <S.Error>{props.formState.errors.contents?.message}</S.Error>
          </S.WrapTitle>
          <S.WrapButton>
            <S.Button onClick={props.onClickCreateQuestion}>문의하기</S.Button>
          </S.WrapButton>
        </S.WrapperInquire>
      </form>
    </S.Wrapper>
  );
}
