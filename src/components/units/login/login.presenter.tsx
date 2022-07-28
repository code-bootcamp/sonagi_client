import * as S from "./login.styles";
import { ILoginPresenterProps } from "./login.types";

export default function LoginPresenter(props: ILoginPresenterProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      <S.Wrapper>
        <S.BookImg src="/login/book.png" />
        <S.LoginWrapper>
          <S.LogoImg onClick={props.onClickMain} src="/header/logo.png" />
          <S.SubTitle>소나기에 돌아오신 것을 환영해요!</S.SubTitle>
          <S.InputBox
            type="text"
            placeholder="이메일 입력"
            {...props.register("email")}
          ></S.InputBox>
          <S.Error>{props.formState.errors.email?.message}</S.Error>
          <S.InputBox
            type="password"
            placeholder="비밀번호 입력"
            {...props.register("pwd")}
          ></S.InputBox>
          <S.Error>{props.formState.errors.pwd?.message}</S.Error>
          <S.LoginButton>로그인</S.LoginButton>
          <S.SubBox>
            <S.CheckImg src="/login/check.png" />
            <S.SubButton>로그인 계정 유지</S.SubButton>
            <S.Stick>|</S.Stick>
            <S.SubButton>아이디 찾기</S.SubButton>
            <S.Stick>|</S.Stick>
            <S.SubButton>비밀번호 재설정</S.SubButton>
          </S.SubBox>
          <S.SignUpBox>
            <S.SubButton>계정이 없으신가요?</S.SubButton>
            <S.SignUpButton onClick={props.onClickMoveToSignUp}>
              회원가입
            </S.SignUpButton>
          </S.SignUpBox>
          <S.OrBox>
            <S.Line></S.Line>
            <S.Or>또는</S.Or>
            <S.Line></S.Line>
          </S.OrBox>
          <S.SignUpBox>
            <a href="https://miny-shrimp.shop/login/google">
              <S.LoginLogoImg src="/login/google.png" />
            </a>
            <a href="https://miny-shrimp.shop/login/naver">
              <S.LoginLogoImg src="/login/naver.png" />
            </a>
            <a href="https://miny-shrimp.shop/login/kakao">
              <S.LoginLogoImg src="/login/kakao.png" />
            </a>
          </S.SignUpBox>
          <S.Corp>ⓒ SONAGI Corp.</S.Corp>
        </S.LoginWrapper>
      </S.Wrapper>
    </form>
  );
}
