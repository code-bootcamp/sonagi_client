import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import useMoveToPage from "../../../../../commons/hooks/UseMoveToPage";
import { accessTokenState, searchKeyword } from "../../../../../commons/store";
import * as S from "./headerMobile.styles";

const LOGOUT_USER = gql`
  mutation Logout {
    Logout {
      msg
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      name
      nickName
      email
      phone
    }
  }
`;

export default function LayoutHeaderMobile() {
  const router = useRouter();
  const [, setSkeyword] = useRecoilState(searchKeyword);

  const [inputblank, setinputblank] = useState("");

  const [Logout] = useMutation(LOGOUT_USER);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const { onClickMoveToPage } = useMoveToPage();

  const onClickLogout = async () => {
    await Logout();

    localStorage.removeItem("refreshToken");
    setAccessToken("");
    window.location.replace("/");
  };

  function onChangeSearchbar(event: any) {
    setinputblank(event.target.value);
  }

  const onClickSearchPage = () => {
    router.push("/search");
    setSkeyword(inputblank);
    setinputblank("");
  };

  return (
    <S.Wrapper>
      {accessToken ? (
        <>
          <S.TopBox>
            <S.SignUpLoginButton onClick={onClickLogout}>
              로그아웃
            </S.SignUpLoginButton>
          </S.TopBox>
          <S.BottomBox>
            <S.LogoImg
              onClick={onClickMoveToPage("/")}
              src="/header/logo.svg"
            />
            <S.WrapSearch>
              <S.SearchBox>
                <S.SearchButton
                  onClick={onClickSearchPage}
                  src="/header/search.png"
                />
                <S.SearchInput
                  onChange={onChangeSearchbar}
                  value={inputblank}
                />
              </S.SearchBox>
              <S.MyPageButton
                onClick={onClickMoveToPage("/myPage")}
                src="/header/user.svg"
              />
            </S.WrapSearch>
          </S.BottomBox>
        </>
      ) : (
        <S.BottomBox>
          <S.LogoImg onClick={onClickMoveToPage("/")} src="/header/logo.svg" />
          <S.WrapSearch>
            <S.SearchBox2>
              <S.SearchButton
                onClick={onClickSearchPage}
                src="/header/search.png"
              />
              <S.SearchInput onChange={onChangeSearchbar} value={inputblank} />
            </S.SearchBox2>
            <S.SignUpLoginButton onClick={onClickMoveToPage("/signup")}>
              회원가입
            </S.SignUpLoginButton>
            <S.SignUpLoginButton onClick={onClickMoveToPage("/login")}>
              로그인
            </S.SignUpLoginButton>
          </S.WrapSearch>
        </S.BottomBox>
      )}
    </S.Wrapper>
  );
}
