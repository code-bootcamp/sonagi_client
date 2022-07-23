import * as S from "./MainPage.styles";
import LayoutBanner from "../../commons/layout/banner";
import CarouselContainer from "../../commons/carousel/1/Carousel.container";
import MainPageQuestionContainer from "../../commons/mainPageQuestion/mainPageQuestion.container";
import MainPagePaymentContainer from "../../commons/mainPagePayment/mainPagePayment.container";
import ReactPlayer from "react-player";
import useScrollFadeIn from "../../../commons/hooks/useScrollFadeIn";
import MainPageSubTitleContainer from "../../commons/mainPageSubTitle/mainPageSubTitle.container";
import MainPagePhoneContainer from "../../commons/mainPagePhone/mainPagePhone.container";

export default function MainPagePresenter() {
  const FadeUp = useScrollFadeIn();

  return (
    <S.Wrapper>
      <LayoutBanner />
      <MainPageSubTitleContainer />
      <CarouselContainer />
      <MainPagePhoneContainer />
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
        <S.VideoContentWrap {...FadeUp}>
          <S.VideoTitle>
            내돈내산 <br />
            소나기 구독 이야기
          </S.VideoTitle>
          <S.VideoContent>
            로봇 개발자부터 <br />
            초등학교 교사까지
          </S.VideoContent>
        </S.VideoContentWrap>
      </S.VideoWrapper>
      <MainPageQuestionContainer />
    </S.Wrapper>
  );
}
