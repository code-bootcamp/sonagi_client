import * as S from "./Header.Styles";
export default function LayoutHeader() {
  return (
    <>
      <S.Wrapper>
        <S.TopBox>
          <S.SignUpLoginButton>회원가입</S.SignUpLoginButton>
          <S.SignUpLoginButton>로그인</S.SignUpLoginButton>
        </S.TopBox>
        <S.BottomBox>
          <S.LogoImg src="/header/logo.png" />
          <S.SearchBox>
            <S.SearchButton src="/header/search.png" />
          </S.SearchBox>
          <S.MyPageButton src="/header/mypage.png" />
        </S.BottomBox>
      </S.Wrapper>
    </>
  );
}
