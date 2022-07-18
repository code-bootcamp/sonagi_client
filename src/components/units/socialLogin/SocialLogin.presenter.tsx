import AgreeTermsContainer from "../agreeTerms/agreeTerms.container";
import * as S from "./SocialLogin.styles";

export default function SocialLoginPresenter(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.Wrapper>
        <S.PhoneImg
          src="/signup/sonagiphone.png"
          onClick={props.onClickMoveToMain}
        />
        <S.LoginWrapper>
          <S.LogoImg src="/signup/signup.png" />
          <S.LogoImg src="/socialLogin/social.png" />
          <S.InputWrapper>
            <S.InputBox
              type="text"
              placeholder="닉네임"
              {...props.register("nickName")}
            ></S.InputBox>
          </S.InputWrapper>
          <S.Error>{props.formState.errors.nickName?.message}</S.Error>
          <S.InputWrapper>
            <S.InputBox
              type="text"
              placeholder="휴대폰 번호"
              onChange={props.onChangePhone}
            ></S.InputBox>
            <S.InputButton onClick={props.onClickSendPhone}>
              인증번호 전송
            </S.InputButton>
          </S.InputWrapper>
          <S.Error>{props.formState.errors.phone?.message}</S.Error>
          <S.InputWrapper>
            <S.InputBox
              type="text"
              placeholder="인증번호 입력"
              onChange={props.onChangeToken}
            ></S.InputBox>
            {props.phoneCheck ? (
              <>
                <S.InputText>인증 완료</S.InputText>
                <S.CheckImg src="signup/check.png" />
              </>
            ) : (
              <S.InputButton onClick={props.onClickAuthPhone}>
                인증 확인하기
              </S.InputButton>
            )}
          </S.InputWrapper>
          <AgreeTermsContainer
            setAgree1={props.setAgree1}
            setAgree2={props.setAgree2}
          />
          <S.SignUpButton isValid={props.formState.isValid}>
            회원가입
          </S.SignUpButton>
          <S.Corp>ⓒ SONAGI Corp.</S.Corp>
        </S.LoginWrapper>
      </S.Wrapper>
    </form>
  );
}
