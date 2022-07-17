import * as S from "./DonateNovel.styles";

export default function DonateNovelPresenter(props) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.DonateNovel>후원 작품</S.DonateNovel>
        <S.DonateListButton
          onClick={props.onClickMoveToPage(`/myPage/paymentHistory`)}
        >
          후원 내역 확인
        </S.DonateListButton>
      </S.TopWrapper>
    </S.Wrapper>
  );
}
