import * as S from "./mainPageQuestion.styles";
import Q1Presenter from "./Q1.presenter";
import Q2Presenter from "./Q2.presenter";
import Q3Presenter from "./Q3.presenter";
import Q4Presenter from "./Q4.presenter";

export default function MainPageQuestionPresenter(props: any) {
  return (
    <S.QuestionWrapper>
      <S.QuestionTitle>자주 묻는 질문</S.QuestionTitle>
      <Q1Presenter
        onClickQuestion1={props.onClickQuestion1}
        isAnswer1={props.isAnswer1}
        onClickQuestion4={undefined}
        onClickQuestion3={undefined}
        onClickQuestion2={undefined}
        isAnswer2={undefined}
        isAnswer3={undefined}
        isAnswer4={undefined}
      />
      <Q2Presenter
        onClickQuestion2={props.onClickQuestion2}
        isAnswer2={props.isAnswer2}
        onClickQuestion4={undefined}
        onClickQuestion3={undefined}
        onClickQuestion1={undefined}
        isAnswer1={undefined}
        isAnswer3={undefined}
        isAnswer4={undefined}
      />
      <Q3Presenter
        onClickQuestion3={props.onClickQuestion3}
        isAnswer3={props.isAnswer3}
        onClickQuestion4={undefined}
        onClickQuestion2={undefined}
        onClickQuestion1={undefined}
        isAnswer1={undefined}
        isAnswer2={undefined}
        isAnswer4={undefined}
      />
      <Q4Presenter
        onClickQuestion4={props.onClickQuestion4}
        isAnswer4={props.isAnswer4}
        onClickQuestion3={undefined}
        onClickQuestion2={undefined}
        onClickQuestion1={undefined}
        isAnswer1={undefined}
        isAnswer2={undefined}
        isAnswer3={undefined}
      />
    </S.QuestionWrapper>
  );
}
