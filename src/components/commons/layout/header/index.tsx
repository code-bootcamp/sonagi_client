import { useRouter } from "next/router";
import * as S from "./header.styles";
export default function LayoutHeader() {
  const router = useRouter();

  const onClickSignUp = () => {
    router.push("/signup");
  };

  const onClickLogin = () => {
    router.push("/login");
  };

  const onClickMain = () => {
    router.push("/");
  };

  return (
    <>
      <S.Wrapper>
        <S.TopBox>
          <S.SignUpLoginButton onClick={onClickSignUp}>
            회원가입
          </S.SignUpLoginButton>
          <S.SignUpLoginButton onClick={onClickLogin}>
            로그인
          </S.SignUpLoginButton>
        </S.TopBox>
        <S.BottomBox>
          <S.LogoImg onClick={onClickMain} src="/header/logo.png" />
          <S.SearchBox>
            <S.SearchButton src="/header/search.png" />
          </S.SearchBox>
          <S.MyPageButton src="/header/mypage.png" />
        </S.BottomBox>
      </S.Wrapper>
    </>
  );
}
