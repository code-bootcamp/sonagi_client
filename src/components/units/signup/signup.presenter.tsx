import * as S from "./signup.styles";

export default function SignUpPresenter() {
  return (
    <S.Wrapper>
      <S.PhoneImg src="/signup/sonagiphone.png" />
      <S.LoginWrapper>
        <S.LogoImg src="/signup/signup.png" />
        <S.WrapSubTitle>
          <S.SubTitle>
            소나기에서는 누구나 창작물로 수익을 얻을 수 있어요.
          </S.SubTitle>
          <S.SubTitle>지금 바로 시작해보세요!</S.SubTitle>
        </S.WrapSubTitle>
        <S.InputWrapper>
          <S.InputBox type="text" placeholder="이름"></S.InputBox>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputBox type="text" placeholder="이메일"></S.InputBox>
          <S.InputButton>중복확인</S.InputButton>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputBox type="password" placeholder="비밀번호"></S.InputBox>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputBox type="password" placeholder="비밀번호 확인"></S.InputBox>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputBox type="text" placeholder="휴대폰 번호"></S.InputBox>
          <S.InputButton>휴대폰 인증</S.InputButton>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputBox type="text" placeholder="인증번호 입력"></S.InputBox>
          <S.InputText>인증 완료</S.InputText>
          <S.CheckImg src="signup/check.png" />
        </S.InputWrapper>
        <S.WrapCheck>
          <S.CheckWrapper>
            <S.CheckBox type="checkbox" />
            <S.CheckTitle>이용약관 동의 (필수)</S.CheckTitle>
            <S.Arrow src="/signup/arrowright.png" />
          </S.CheckWrapper>
          <S.CheckWrapper>
            <S.CheckBox type="checkbox" />
            <S.CheckTitle>개인정보 취급방침 동의 (필수)</S.CheckTitle>
            <S.Arrow src="/signup/arrowright.png" />
          </S.CheckWrapper>
          <S.CheckWrapper>
            <S.CheckBox type="checkbox" />
            <S.CheckTitle>마게팅 정보 수신 동의 (선택)</S.CheckTitle>
            <S.Arrow src="/signup/arrowright.png" />
          </S.CheckWrapper>
        </S.WrapCheck>
        <S.SignUpButton>회원가입</S.SignUpButton>
        <S.Corp>ⓒ SONAGI Corp.</S.Corp>
      </S.LoginWrapper>
    </S.Wrapper>
  );
}
