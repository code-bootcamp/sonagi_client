import * as S from "./login.styles";

export default function LoginPresenter() {
  return (
    <S.Wrapper>
      <S.BookImg src="/login/book.png" />
      <S.LoginWrapper>
        <S.LogoImg src="/header/logo.png" />
        <S.SubTitle>소나기에 돌아오신 것을 환영해요!</S.SubTitle>
        <S.InputBox type="text" placeholder="이메일 입력"></S.InputBox>
        <S.InputBox type="password" placeholder="비밀번호 입력"></S.InputBox>
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
          <S.SignUpButton>회원가입</S.SignUpButton>
        </S.SignUpBox>
        <S.OrBox>
          <S.Line></S.Line>
          <S.Or>또는</S.Or>
          <S.Line></S.Line>
        </S.OrBox>
        <S.SignUpBox>
          <S.LoginLogoImg src="/login/google.png" />
          <S.LoginLogoImg src="/login/naver.png" />
          <S.LoginLogoImg src="/login/kakao.png" />
        </S.SignUpBox>
        <S.Corp>ⓒ SONAGI Corp.</S.Corp>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
