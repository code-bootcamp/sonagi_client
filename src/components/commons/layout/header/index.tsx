import { useRouter } from "next/router";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import * as S from "./header.styles";
export default function LayoutHeader() {
  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickSearch = () => {
    router.push("/search");
  };

  return (
    <S.Wrapper>
      <S.TopBox>
        <S.SignUpLoginButton onClick={onClickMoveToPage("/signup")}>
          회원가입
        </S.SignUpLoginButton>
        <S.SignUpLoginButton onClick={onClickMoveToPage("/login")}>
          로그인
        </S.SignUpLoginButton>
      </S.TopBox>
      <S.BottomBox>
        <S.LogoImg onClick={onClickMoveToPage("/")} src="/header/logo.png" />
        <S.WrapSearch>
          <S.SearchBox>
            <S.SearchButton onClick={onClickSearch} src="/header/search.png" />
          </S.SearchBox>
          <S.MyPageButton src="/header/mypage.png" />
        </S.WrapSearch>
      </S.BottomBox>
    </S.Wrapper>
  );
}
