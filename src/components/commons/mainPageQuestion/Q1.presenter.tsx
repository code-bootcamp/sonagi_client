import * as S from "./mainPageQuestion.styles";
import { IMainPageQuestionPresenterProps } from "./mainPageQuestion.types";

export default function Q1Presenter(props: IMainPageQuestionPresenterProps) {
  return (
    <S.QuestionBox1
      onClick={props.onClickQuestion1}
      isAnswer1={props.isAnswer1}
    >
      <S.QuestionContents1 isAnswer1={props.isAnswer1}>
        읽지 않으면 환불이 가능한가요?
      </S.QuestionContents1>
      {props.isAnswer1 && (
        <S.AnswerContents>
          물론입니다. <br />
          결제 후 콘텐츠 다운로드 및 열람을 하지 않으셨다면 전액 환불해 드리고
          있어요.
          <br />
          <b>[소나기 &gt; 마이페이지 &gt; 구매 &gt; 결제 내역]</b> 에서 직접
          환불이 가능하며,
          <br />
          해결이 어려운 경우 고객센터로 문의해 주세요.
        </S.AnswerContents>
      )}
    </S.QuestionBox1>
  );
}
