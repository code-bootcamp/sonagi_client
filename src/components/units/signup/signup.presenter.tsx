import AgreeTermsContainer from "../agreeTerms/agreeTerms.container";
import * as S from "./signup.styles";
import { ISignupPresenterProps } from "./signup.types";

export default function SignUpPresenter(props: ISignupPresenterProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickSignUp)}>
      <S.Wrapper>
        <S.PhoneImg
          src="/signup/sonagiphone.png"
          onClick={props.onClickMoveToMain}
        />
        <S.LoginWrapper>
          <S.LogoImg src="/signup/signup.png" />
          <S.WrapSubTitle>
            <S.SubTitle>
              소나기에서는 누구나 창작물로 수익을 얻을 수 있어요.
            </S.SubTitle>
            <S.SubTitle>지금 바로 시작해보세요!</S.SubTitle>
          </S.WrapSubTitle>
          <S.InputWrapper>
            <S.InputBox
              type="text"
              placeholder="이름"
              {...props.register("name")}
            ></S.InputBox>
          </S.InputWrapper>
          <S.Error>{props.formState.errors.name?.message}</S.Error>
          <S.InputWrapper>
            <S.InputBox
              type="text"
              placeholder="이메일"
              {...props.register("email")}
            ></S.InputBox>
          </S.InputWrapper>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
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
              type="password"
              placeholder="비밀번호"
              {...props.register("pwd")}
            ></S.InputBox>
          </S.InputWrapper>
          <S.Error>{props.formState.errors.pwd?.message}</S.Error>
          <S.InputWrapper>
            <S.InputBox
              type="password"
              placeholder="비밀번호 확인"
              {...props.register("pwdCheck")}
            ></S.InputBox>
          </S.InputWrapper>
          <S.Error>
            {props.formState.errors.pwdCheck && "비밀번호가 일치하지 않습니다"}
          </S.Error>
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
            setAgree2={props.setAgree1}
          />
          <S.SignUpButton>회원가입</S.SignUpButton>
          <S.Corp>ⓒ SONAGI Corp.</S.Corp>
        </S.LoginWrapper>
      </S.Wrapper>
    </form>
  );
}
