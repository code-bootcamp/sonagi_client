import * as S from "./MainPage.styles";
import LayoutBanner from "../../commons/layout/banner";
import Fade from "react-reveal/Fade";
import CarouselContainer from "../../commons/carousel/1/Carousel.container";
import MainPageQuestionContainer from "../../commons/mainPageQuestion/mainPageQuestion.container";
import MainPagePaymentContainer from "../../commons/mainPagePayment/mainPagePayment.container";
import ReactPlayer from "react-player";

export default function MainPagePresenter() {
  return (
    <S.Wrapper>
      <LayoutBanner />
      <S.TitleWrapper>
        <Fade bottom duration={3000}>
          <S.SubTitleWrapper>
            <S.Title>소소한</S.Title>
            <S.Title>나의 이야기</S.Title>
          </S.SubTitleWrapper>
          <S.SubTitleWrapper>
            <S.Subtitle>베스트 셀러와</S.Subtitle>
            <S.Subtitle>최신 작품들까지</S.Subtitle>
          </S.SubTitleWrapper>
        </Fade>
      </S.TitleWrapper>
      <CarouselContainer />
      <S.PhoneWrapper>
        <Fade bottom duration={3000}>
          <S.SubTitleWrapper>
            <S.Title>무료 소설과</S.Title>
            <S.Title>인기 작가의 작품</S.Title>
          </S.SubTitleWrapper>
          <S.SubTitleWrapper>
            <S.Subtitle>독자들이 픽한</S.Subtitle>
            <S.Subtitle>인기 분야 소설을 확인해보세요</S.Subtitle>
          </S.SubTitleWrapper>
        </Fade>
        <S.PhoneImg src="/mainpage/phone.png" />
        <S.PhoneSubImg src="/mainpage/phone2-1.png" />
        <S.PhoneSubImg2 src="/mainpage/phone2-4.png" />
        <S.PhoneSubImg3 src="/mainpage/phone2-2.png" />
        <S.PhoneSubImg4 src="/mainpage/phone2-3.png" />
      </S.PhoneWrapper>
      <MainPagePaymentContainer />
      <S.VideoWrapper>
        <S.VideoDiv>
          <ReactPlayer
            url={"https://www.youtube.com/watch?v=GI3kMiPwibQ"}
            width="400px"
            height="400px"
            playing={true}
            muted={true}
            controls={true}
          />
        </S.VideoDiv>
        <Fade bottom duration={3000}>
          <S.VideoContentWrap>
            <S.VideoTitle>
              내돈내산 <br />
              소나기 구독 이야기
            </S.VideoTitle>
            <S.VideoContent>
              로봇 개발자부터 <br />
              초등학교 교사까지
            </S.VideoContent>
          </S.VideoContentWrap>
        </Fade>
      </S.VideoWrapper>
      <MainPageQuestionContainer />
    </S.Wrapper>
  );
}
