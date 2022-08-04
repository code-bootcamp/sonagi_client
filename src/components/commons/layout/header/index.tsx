import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import { accessTokenState, searchKeyword } from "../../../../commons/store";
import * as S from "./header.styles";
import LayoutHeaderMobile from "./headerMobile";

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

export default function LayoutHeader() {
  const router = useRouter();
  const [skeyword, setSkeyword] = useRecoilState(searchKeyword);
  console.log(skeyword);

  const [inputblank, setinputblank] = useState("");

  const [Logout] = useMutation(LOGOUT_USER);
  const { data } = useQuery(FETCH_LOGIN_USER);
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
    <>
      <S.Wrapper>
        <S.TopBox>
          {accessToken ? (
            <>
              <S.LoginUser>{data?.fetchLoginUser?.nickName}</S.LoginUser>
              <S.LoginUser2>님 환영합니다!</S.LoginUser2>
              <S.SignUpLoginButton onClick={onClickLogout}>
                로그아웃
              </S.SignUpLoginButton>
            </>
          ) : (
            <>
              <S.SignUpLoginButton onClick={onClickMoveToPage("/signup")}>
                회원가입
              </S.SignUpLoginButton>
              <S.SignUpLoginButton onClick={onClickMoveToPage("/login")}>
                로그인
              </S.SignUpLoginButton>
            </>
          )}
        </S.TopBox>
        <S.BottomBox>
          <S.LogoImg onClick={onClickMoveToPage("/")} src="/header/logo.svg" />
          <S.WrapSearch>
            <S.SearchBox>
              <S.SearchButton
                onClick={onClickSearchPage}
                src="/header/search.png"
              />
              <S.SearchInput onChange={onChangeSearchbar} value={inputblank} />
            </S.SearchBox>
            <S.MyPageButton
              onClick={onClickMoveToPage("/myPage")}
              src="/header/user.svg"
            />
          </S.WrapSearch>
        </S.BottomBox>
      </S.Wrapper>
      <LayoutHeaderMobile />
    </>
  );
}
