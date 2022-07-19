import * as S from "./MainPage.styles";
import LayoutBanner from "../../commons/layout/banner";
import Fade from "react-reveal/Fade";
import CarouselContainer from "../../commons/carousel/1/Carousel.container";
import MainPageQuestionContainer from "../../commons/mainPageQuestion/mainPageQuestion.container";

export default function MainPagePresenter() {
  return (
    <S.Wrapper>
      <LayoutBanner />
      <S.TitleWrapper>
        <Fade bottom duration={3000}>
          <S.Title>소소한</S.Title>
          <S.Title>나의 이야기</S.Title>
          <S.Subtitle>베스트 셀러와</S.Subtitle>
          <S.Subtitle>최신 작품들까지</S.Subtitle>
        </Fade>
      </S.TitleWrapper>
      <CarouselContainer />
      <S.PhoneWrapper>
        <Fade bottom duration={3000}>
          <S.Title>무료 소설과</S.Title>
          <S.Title>인기 작가의 작품</S.Title>
          <S.Subtitle>독자들이 픽한</S.Subtitle>
          <S.Subtitle>인기 분야 소설을 확인해보세요</S.Subtitle>
        </Fade>
        <S.PhoneImg src="/mainpage/phone.png" />
        <S.PhoneSubImg src="/mainpage/phone2-1.png" />
        <S.PhoneSubImg2 src="/mainpage/phone2-4.png" />
        <S.PhoneSubImg3 src="/mainpage/phone2-2.png" />
        <S.PhoneSubImg4 src="/mainpage/phone2-3.png" />
      </S.PhoneWrapper>
      <MainPageQuestionContainer />
    </S.Wrapper>
  );
}
