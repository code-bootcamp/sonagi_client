import * as S from "./MyPage.styles";
import React from "react";
// import { useForm } from "react-hook-form";

export default function MyPagePresenter(props: any) {
  return (
    <S.Wrapper>
      <S.DIV>
        <S.ChargeButton onClick={props.onClickMoveToPointCharge}>
          포인트 충전
        </S.ChargeButton>
      </S.DIV>
      <S.LargeBox>
        <S.InnerLeftBox>
          <img src="myPage/avatar.png" />
          <S.ChangeButton>변경</S.ChangeButton>
          <S.Name>
            <span>{props.data?.fetchLoginUser?.nickName}</span>님
          </S.Name>
          <S.Email>{props.data?.fetchLoginUser.email}</S.Email>
          <S.Flex>
            <S.Point>포인트 {props.data?.fetchLoginUser?.point}원</S.Point>
          </S.Flex>
        </S.InnerLeftBox>
        <S.InnerRightBox>
          <S.MainFlex>
            <S.Column>
              <S.Icon src="myPage/won.svg" />
              <S.Title>소나기 포인트</S.Title>
              <S.Div>
                <S.Middle>{props.data?.fetchLoginUser?.point}</S.Middle>
                <S.Middle>원</S.Middle>
              </S.Div>
              <S.MainBottom onClick={props.onClickMoveToPaymentHistory}>
                충전 내역 &gt;&gt;
              </S.MainBottom>
            </S.Column>
            <S.Column>
              <S.Icon src="myPage/love.svg" />
              <S.Title>찜한 작품</S.Title>
              <S.Middle>0권</S.Middle>
              <S.MainBottom>찜한 내역 &gt;&gt;</S.MainBottom>
            </S.Column>
            <S.Column>
              <S.Icon src="myPage/chat.svg" />
              <S.Title>1:1 문의</S.Title>
              <S.Middle>0건</S.Middle>
              <S.MainBottom>문의 내역 &gt;&gt;</S.MainBottom>
            </S.Column>
          </S.MainFlex>
          <S.ChargeHistory onClick={props.onClickMoveToPaymentCharge}>
            충전 내역
          </S.ChargeHistory>
        </S.InnerRightBox>
      </S.LargeBox>
    </S.Wrapper>
  );
}
