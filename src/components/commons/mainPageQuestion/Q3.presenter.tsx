import * as S from "./mainPageQuestion.styles";
import { IMainPageQuestionPresenterProps } from "./mainPageQuestion.types";

export default function Q3Presenter(props: IMainPageQuestionPresenterProps) {
  return (
    <S.QuestionBox3
      onClick={props.onClickQuestion3}
      isAnswer3={props.isAnswer3}
    >
      <S.QuestionContents3 isAnswer3={props.isAnswer3}>
        기다리면 무료는 누구나 읽을 수 있나요?
      </S.QuestionContents3>
      {props.isAnswer3 && (
        <S.AnswerContents>
          네. 소나기의 회원이라면 누구나 기다리면 무료 혜택을 받을 수 있어요.{" "}
          <br />
          <br />
          도서 표지의 <b>&#39;기다리면 무료 마크&#39;</b>를 확인하세요!
          <br />
          읽고 싶은 작품이 &#39;기다리면 무료&#39;라면&#44;
          <br />
          <b>24시간마다 1화씩 계속 무료</b>로 읽을 수 있어요.
        </S.AnswerContents>
      )}
    </S.QuestionBox3>
  );
}
