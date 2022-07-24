import * as S from "./mainPageQuestion.styles";
import { IMainPageQuestionPresenterProps } from "./mainPageQuestion.types";

export default function Q4Presenter(props: IMainPageQuestionPresenterProps) {
  return (
    <S.QuestionBox4
      onClick={props.onClickQuestion4}
      isAnswer4={props.isAnswer4}
    >
      <S.QuestionContents4 isAnswer4={props.isAnswer4}>
        회원가입 시 인증 / 로그인이 안돼요
      </S.QuestionContents4>
      {props.isAnswer4 && (
        <S.AnswerContents>
          회원가입 시 입력한 이메일 주소로 인증 링크가 담긴 메일이 발송돼요.{" "}
          <br />
          가입일로부터 5일 이내에 이메일 인증을 완료하지 않는 경우, 가입 정보가
          파기되니 새로 회원가입을 진행해 주세요.
          <br />
          <br />
          <b> ※ 참고해주세요!</b>
          <br />
          인증 링크는 이메일 발송 시점으로부터 3시간 동안 유효하며, <br />
          유효시간이 지났다면 홈페이지에서 로그인한 뒤 인증 메일 재발송을 해야
          합니다.
          <br />
        </S.AnswerContents>
      )}
    </S.QuestionBox4>
  );
}
