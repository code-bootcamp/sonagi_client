import * as S from "./MyPage.styles";
export default function MyPagePresenter() {
  return (
    <S.Wrapper>
      <S.CashCharge>캐시충전</S.CashCharge>
      <S.LargeBox>
        <S.InnerLeftBox>
          <img src="myPage/ProfileVector.png" />
          <S.ChangeButton>변경</S.ChangeButton>
          <S.Name>이름님</S.Name>
          <S.Email>abcdefghij@gamil.com</S.Email>
          <S.Flex>
            <S.Point>포인트 100P |</S.Point>
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
        </S.InnerRightBox>
      </S.LargeBox>
    </S.Wrapper>
  );
}
