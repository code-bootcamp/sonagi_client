import * as S from "./mainPageQuestion.styles";
import { IMainPageQuestionPresenterProps } from "./mainPageQuestion.types";

export default function Q2Presenter(props: IMainPageQuestionPresenterProps) {
  return (
    <S.QuestionBox2
      onClick={props.onClickQuestion2}
      isAnswer2={props.isAnswer2}
    >
      <S.QuestionContents2 isAnswer2={props.isAnswer2}>
        어떤 기기에서 사용할 수 있나요?
      </S.QuestionContents2>
      {props.isAnswer2 && (
        <S.AnswerContents>
          아래 기기와 버전에서 소나기를 사용할 수 있어요. <br />
          <br />
          - 휴대폰 / 태블릿 : iOS13, Android 6 이상 지원
          <br />
          - PC : Mac Yosemite, Window 10 이상 지원
          <br />
          (크레마 그랑데, 크레마 카르타G, 이노스페이스원 공식 판매 기기, 교보
          Sam 7.8 등)
        </S.AnswerContents>
      )}
    </S.QuestionBox2>
  );
}
