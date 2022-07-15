import * as S from "./agreeTerms.styles";
import Terms1 from "./Terms/Terms1.presenter";
import Terms2 from "./Terms/Terms2.presenter";
import Terms3 from "./Terms/Terms3.presenter";

export default function AgreeTermsPresenter(props) {
  return (
    <S.WrapCheck>
      <S.CheckWrapper>
        <S.CheckBox type="checkbox" onClick={props.onClickCheckAgree1} />
        <S.CheckTitle>이용약관 동의 (필수)</S.CheckTitle>
        <S.Arrow src="/signup/arrowright.png" onClick={props.onClickCheck1} />
      </S.CheckWrapper>
      <S.CheckWrapper>
        <S.CheckBox type="checkbox" onClick={props.onClickCheckAgree2} />
        <S.CheckTitle>개인정보 취급방침 동의 (필수)</S.CheckTitle>
        <S.Arrow src="/signup/arrowright.png" onClick={props.onClickCheck2} />
      </S.CheckWrapper>
      <S.CheckWrapper>
        <S.CheckBox type="checkbox" />
        <S.CheckTitle>마게팅 정보 수신 동의 (선택)</S.CheckTitle>
        <S.Arrow src="/signup/arrowright.png" onClick={props.onClickCheck3} />
      </S.CheckWrapper>
      {props.CheckBox === "Check1" && (
        <S.BoxWrapper>
          <S.Title>이용약관</S.Title>
          <Terms1 />
          <S.Button onClick={props.onClickClose}>닫기</S.Button>
        </S.BoxWrapper>
      )}
      {props.CheckBox === "Check2" && (
        <S.BoxWrapper>
          <S.Title>개인정보 취급방침</S.Title>
          <Terms2 />
          <S.Button onClick={props.onClickClose}>닫기</S.Button>
        </S.BoxWrapper>
      )}
      {props.CheckBox === "Check3" && (
        <S.BoxWrapper>
          <S.Title>마케팅 정보 수신동의</S.Title>
          <Terms3 />
          <S.Button onClick={props.onClickClose}>닫기</S.Button>
        </S.BoxWrapper>
      )}
    </S.WrapCheck>
  );
}
