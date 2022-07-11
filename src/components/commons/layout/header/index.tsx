import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import { accessTokenState } from "../../../../commons/store";
import * as S from "./header.styles";

const LOGOUT_USER = gql`
  mutation Logout {
    Logout {
      msg
    }
  }
`;

export default function LayoutHeader() {
  const [Logout] = useMutation(LOGOUT_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { onClickMoveToPage } = useMoveToPage();
  const router = useRouter();

  const onClickSearch = () => {
    router.push("/search");
  };

  const onClickMyPage = () => {
    router.push("/myPage");
  };

  const onClickLogout = async () => {
    const result = await Logout();
    console.log(result);

    localStorage.removeItem("refreshToken");
    setAccessToken("");
    window.location.replace("/");
  };

  return (
    <S.Wrapper>
      <S.TopBox>
        <S.SignUpLoginButton onClick={onClickMoveToPage("/signup")}>
          회원가입
        </S.SignUpLoginButton>
        {accessToken ? (
          <S.SignUpLoginButton onClick={onClickLogout}>
            로그아웃
          </S.SignUpLoginButton>
        ) : (
          <S.SignUpLoginButton onClick={onClickMoveToPage("/login")}>
            로그인
          </S.SignUpLoginButton>
        )}
      </S.TopBox>
      <S.BottomBox>
        <S.LogoImg onClick={onClickMoveToPage("/")} src="/header/logo.svg" />
        <S.WrapSearch>
          <S.SearchBox>
            <S.SearchButton onClick={onClickSearch} src="/header/search.png" />
            <S.SearchInput />
          </S.SearchBox>
          <S.MyPageButton onClick={onClickMyPage} src="/header/mypage.png" />
        </S.WrapSearch>
      </S.BottomBox>
    </S.Wrapper>
  );
}
