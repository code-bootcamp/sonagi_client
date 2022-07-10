import * as S from "./MyPageSideBar.styles";
export default function MyPageSideBarPresenter(props: any) {
  return (
    <S.Wrapper>
      <S.MyPage onClick={props.onClickMoveToMyPage}>마이페이지</S.MyPage>
      <S.Flex>
        <S.Img src="../myPageSideBar/menu_book.png" />
        <S.Column>
          <S.Title>소설</S.Title>
          <S.Menu onClick={props.onClickMoveToRecentWatch}>최근 본 작품</S.Menu>
          <S.Menu>찜한 작품</S.Menu>
          <S.Menu onClick={props.onClickMoveToMyNovel}>나의 작품</S.Menu>
        </S.Column>
      </S.Flex>
      <S.Line />
      <S.Flex>
        <S.Img src="../myPageSideBar/local_atm.png" />
        <S.Column>
          <S.Title>구매</S.Title>
          <S.Menu onClick={props.onClickMoveToPaymentHistory}>결제 내역</S.Menu>
          <S.Menu onClick={props.onClickMoveToPointCharge}>포인트 충전</S.Menu>
        </S.Column>
      </S.Flex>
      <S.Line />
      <S.Flex>
        <S.Vector src="../myPageSideBar/Vector.png" />
        <S.Column>
          <S.Title>개인</S.Title>
          <S.Menu>1:1 문의</S.Menu>
          <S.Menu>회원정보 변경</S.Menu>
        </S.Column>
      </S.Flex>
    </S.Wrapper>
  );
}
