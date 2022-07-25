import * as S from "./MyPage.styles";
import React from "react";
import HamburgerPage from "../../commons/hamburger";
// import { useForm } from "react-hook-form";

export default function MyPagePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.HamburgerWrapper>
        <HamburgerPage />
      </S.HamburgerWrapper>
      <S.LargeBox>
        <S.InnerLeftBox>
          <img src="/myPage/avatar.png" />
          <S.Name>
            <span>{props.data?.fetchLoginUser?.nickName}</span>님
          </S.Name>
          <S.Email>{props.data?.fetchLoginUser.email}</S.Email>
          <S.Flex>
            <S.Point>
              포인트 {props.data?.fetchLoginUser?.point.toLocaleString("ko-KR")}
              원
            </S.Point>
          </S.Flex>
        </S.InnerLeftBox>
        <S.InnerRightBox>
          <S.MainFlex>
            <S.Column>
              <S.Icon src="/myPage/won.svg" />
              <S.Title>소나기 포인트</S.Title>
              <S.Div>
                <S.Middle>
                  {props.data?.fetchLoginUser?.point.toLocaleString("ko-KR")}
                </S.Middle>
                <S.Middle>원</S.Middle>
              </S.Div>
              <S.MainBottom
                onClick={props.onClickMoveToPage("/myPage/paymentHistory")}
              >
                충전 내역 &gt;&gt;
              </S.MainBottom>
            </S.Column>
            <S.Column>
              <S.Icon src="/myPage/love.svg" />
              <S.Title>찜한 작품</S.Title>
              <S.Middle>{props.LikeCount}권</S.Middle>
              <S.MainBottom
                onClick={props.onClickMoveToPage("/myPage/likeNovel")}
              >
                찜한 내역 &gt;&gt;
              </S.MainBottom>
            </S.Column>
            <S.Column>
              <S.Icon src="/myPage/chat.svg" />
              <S.Title>1:1 문의</S.Title>
              <S.Middle>0건</S.Middle>
              <S.MainBottom
                onClick={props.onClickMoveToPage("/myPage/inquireList")}
              >
                문의 내역 &gt;&gt;
              </S.MainBottom>
            </S.Column>
          </S.MainFlex>
        </S.InnerRightBox>
      </S.LargeBox>
    </S.Wrapper>
  );
}
