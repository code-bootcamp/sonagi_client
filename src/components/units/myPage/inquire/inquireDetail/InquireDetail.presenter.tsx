import * as S from "./InquireDetail.styles";
import { IInquireDetailPresenterProps } from "./InquireDetail.types";

export default function InquireDetailPresenter(
  props: IInquireDetailPresenterProps
) {
  return (
    <S.Wrapper>
      <S.MainTitle>1 : 1 문의</S.MainTitle>
      <S.WrapperInquire>
        <S.WrapTitle>
          <S.TitleWrapper>
            <S.Label>제목</S.Label>
          </S.TitleWrapper>
          <S.LabelInput>{props.data?.fetchQuestion.title}</S.LabelInput>
        </S.WrapTitle>
        <S.WrapTitle>
          <S.TitleWrapper>
            <S.Label>문의 내용</S.Label>
          </S.TitleWrapper>
          <S.ContentsInput>
            {props.data?.fetchQuestion.contents}
          </S.ContentsInput>
        </S.WrapTitle>
      </S.WrapperInquire>
      {String(props.data?.fetchQuestion.status) === "true" ? (
        <S.WrapperInquire>
          <S.AnswerTitle>1 : 1 문의 답변</S.AnswerTitle>
          <S.WrapTitle>
            <S.TitleWrapper>
              <S.Label>제목</S.Label>
            </S.TitleWrapper>
            <S.LabelInput>{props.data?.fetchQuestion.title}</S.LabelInput>
          </S.WrapTitle>
          <S.WrapTitle>
            <S.TitleWrapper>
              <S.Label>답변 내용</S.Label>
            </S.TitleWrapper>
            <S.ContentsInput>
              {props.data?.fetchQuestion.contents}
            </S.ContentsInput>
          </S.WrapTitle>
          <S.WrapButton>
            <S.Button onClick={props.onClickMoveToPage("/myPage/inquire/")}>
              목록으로
            </S.Button>
          </S.WrapButton>
        </S.WrapperInquire>
      ) : (
        <div></div>
      )}
    </S.Wrapper>
  );
}
