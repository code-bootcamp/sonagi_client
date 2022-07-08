import * as S from "./mainPageQuestion.styles";

export default function MainPageQuestionPresenter(props) {
  return (
    <S.QuestionWrapper>
      <S.QuestionTitle>자주 묻는 질문</S.QuestionTitle>
      <S.QuestionBox
        onClick={props.onClickQuestion1}
        isAnswer1={props.isAnswer1}
      >
        <S.QuestionContents isAnswer1={props.isAnswer1}>
          읽지 않으면 환불이 가능한가요?
        </S.QuestionContents>
        {props.isAnswer1 && (
          <S.AnswerContents>
            아니요 안됩니다. <br />
            결제 후 콘텐츠 다운로드 및 열람을 하지 않아도 환불이 불가능 합니다.
            <br />
            돌아가서 어서 읽으세요!
          </S.AnswerContents>
        )}
      </S.QuestionBox>
      <S.QuestionBox
        onClick={props.onClickQuestion2}
        isAnswer2={props.isAnswer2}
      >
        <S.QuestionContents isAnswer2={props.isAnswer2}>
          구독 후 해지가 가능한가요? 수수료는 없나요?
        </S.QuestionContents>
      </S.QuestionBox>
      <S.QuestionBox
        onClick={props.onClickQuestion3}
        isAnswer3={props.isAnswer3}
      >
        <S.QuestionContents isAnswer3={props.isAnswer3}>
          무료 혜택은 누구나 받을 수 있나요?
        </S.QuestionContents>
      </S.QuestionBox>
      <S.QuestionBox
        onClick={props.onClickQuestion4}
        isAnswer4={props.isAnswer4}
      >
        <S.QuestionContents isAnswer4={props.isAnswer4}>
          어떤 기기에서 사용할 수 있나요?
        </S.QuestionContents>
      </S.QuestionBox>
    </S.QuestionWrapper>
  );
}