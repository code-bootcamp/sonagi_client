import * as S from "./MyPage.styles";
import React from "react";
// import { useForm } from "react-hook-form";

export default function MyPagePresenter(props: any) {
  return (
    <S.Wrapper>
      {/* {props.isModalVisible && (
        <S.PayMentWrapper>
          <S.Titles>포인트 충전</S.Titles>
          <S.MoneyWrapper>
            <S.MySelect onChange={props.onChangeMoney}>
              <S.MyOption onClick={props.SelectMoney}>
                {props.selected}
              </S.MyOption>
              {props.isSelect && (
                <>
                  <S.Table>
                    <S.MyLi onClick={props.onClickMoney} value="100">
                      100
                    </S.MyLi>
                    <S.MyLi onClick={props.onClickMoney} value="500">
                      500
                    </S.MyLi>
                    <S.MyLi onClick={props.onClickMoney} value="2000">
                      2000
                    </S.MyLi>
                    <S.MyLis onClick={props.onClickMoney} value="5000">
                      5000
                    </S.MyLis>
                  </S.Table>
                </>
              )}
            </S.MySelect>
          </S.MoneyWrapper>
          <S.MoneyButton onClick={props.requestpay}>충전하기</S.MoneyButton>
        </S.PayMentWrapper>
      )} */}
      <S.DIV>
        <S.ChargeButton onClick={props.handleOk}>캐시충전</S.ChargeButton>
      </S.DIV>
      <S.MyPageFont>마이 페이지</S.MyPageFont>
      <S.LargeBox>
        <S.InnerLeftBox>
          <img src="myPage/ProfileVector.png" />
          <S.ChangeButton>변경</S.ChangeButton>
          <S.Name>닉네임 님</S.Name>
          <S.Email>abcdefghij@gamil.com</S.Email>
          <S.Flex>
            <S.Point>포인트 100P</S.Point>
            <S.Dash>|</S.Dash>
            <S.Point>충전하기</S.Point>
          </S.Flex>
          <S.LogoutButton>로그아웃</S.LogoutButton>
        </S.InnerLeftBox>
        <S.InnerRightBox>
          <S.MainFlex>
            <S.Column>
              <S.Pig src="myPage/Pig.png" />
              <S.Title>소나기 포인트</S.Title>
              <S.Middle>0원</S.Middle>
              <S.MainBottom>충전 내역</S.MainBottom>
            </S.Column>
            <S.Column>
              <S.Hearts src="myPage/Hearts.png" />
              <S.Title>찜한 작품</S.Title>
              <S.Middle>0권</S.Middle>
              <S.MainBottom>찜한 내역</S.MainBottom>
            </S.Column>
            <S.Column>
              <S.MessageIcon src="myPage/Question.png" />
              <S.Title>1:1 문의</S.Title>
              <S.Middle>0건</S.Middle>
              <S.MainBottom>문의 내역</S.MainBottom>
            </S.Column>
          </S.MainFlex>
          <S.ChargeHistory>충전 내역 {"> >"}</S.ChargeHistory>
        </S.InnerRightBox>
      </S.LargeBox>
    </S.Wrapper>
  );
}
