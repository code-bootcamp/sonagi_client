import HamburgerPage from "../../../commons/hamburger";
import * as S from "./DonateNovel.styles";
import { IDonateNovelPresenterProps } from "./DonateNovel.types";

export default function DonateNovelPresenter(
  props: IDonateNovelPresenterProps
) {
  return (
    <S.Wrapper>
      <S.HamburgerWrapper>
        <HamburgerPage />
      </S.HamburgerWrapper>
      <S.TopWrapper>
        <S.DonateNovel>후원 작품</S.DonateNovel>
        <S.DonateListButton
          onClick={props.onClickMoveToPage(`/myPage/paymentHistory`)}
        >
          후원 내역 확인
        </S.DonateListButton>
      </S.TopWrapper>
      <S.GridWrap>
        {props.data?.fetchDonatePoints
          .slice(0, 10)
          .map((el: IDonateNovelPresenterProps) => (
            <S.BoxWrapper key={el.id}>
              <S.ImageWrapper>
                <S.Img
                  src={`https://storage.googleapis.com/code-camp-main-project/${el.novel.files[0].url}`}
                />
              </S.ImageWrapper>
              <S.InnerFlex>
                <S.Column>
                  <S.Title>{el.novel.title}</S.Title>
                  <S.GenreFlex>
                    <S.Genre>{el.point.toLocaleString("ko-KR")} 원</S.Genre>
                    <S.Time>작가 {el.novel.user.nickName}</S.Time>
                  </S.GenreFlex>
                </S.Column>
                <S.BoxFlex>
                  <S.Button1
                    onClick={props.onClickMoveToPage(`/novel/${el.novel.id}`)}
                  >
                    상세보기
                  </S.Button1>
                  <S.Button1>후원하기</S.Button1>
                </S.BoxFlex>
              </S.InnerFlex>
            </S.BoxWrapper>
          ))}
      </S.GridWrap>
    </S.Wrapper>
  );
}
