import * as S from "./MainPage.styles";
import LayoutBanner from "../../commons/layout/banner";
// import Fade from "react-reveal/Fade";
import CarouselContainer from "../../commons/carousel/1/Carousel.container";

export default function MainPagePresenter(props: any) {
  return (
    <>
      <S.Wrapper>
        <div>
          <LayoutBanner />
        </div>
        <S.TitleWrapper>
          <S.Title>소소한</S.Title>
          <S.Title>나의 이야기</S.Title>
          <S.Subtitle>베스트 셀러와</S.Subtitle>
          <S.Subtitle>최신 작품들까지</S.Subtitle>
        </S.TitleWrapper>
        <CarouselContainer />
        <S.PhoneWrapper>
          <S.Title>무료 소설과</S.Title>
          <S.Title>인기 작가의 작품</S.Title>
          <S.Subtitle>독자들이 픽한</S.Subtitle>
          <S.Subtitle>인기 분야 소설을 확인해보세요</S.Subtitle>
          <S.PhoneImg src="/mainpage/phone.png" />
          <S.PhoneSubImg src="/mainpage/phone2-1.png" />
          <S.PhoneSubImg2 src="/mainpage/phone2-4.png" />
          <S.PhoneSubImg3 src="/mainpage/phone2-2.png" />
          <S.PhoneSubImg4 src="/mainpage/phone2-3.png" />
        </S.PhoneWrapper>
        <S.QuestionWrapper>
          <S.QuestionTitle>자주 묻는 질문</S.QuestionTitle>
          <S.QuestionBox
            onClick={props.onClickQuestion1}
            isAnswer={props.isAnswer}
          >
            읽지 않으면 환불이 가능한가요?
          </S.QuestionBox>
          <S.QuestionBox
            onClick={props.onClickQuestion2}
            isAnswer={props.isAnswer}
          >
            구독 후 해지가 가능한가요? 수수료는 없나요?
          </S.QuestionBox>
          <S.QuestionBox
            onClick={props.onClickQuestion3}
            isAnswer={props.isAnswer}
          >
            무료 혜택은 누구나 받을 수 있나요?
          </S.QuestionBox>
          <S.QuestionBox
            onClick={props.onClickQuestion4}
            isAnswer={props.isAnswer}
          >
            어떤 기기에서 사용할 수 있나요?
          </S.QuestionBox>
        </S.QuestionWrapper>
      </S.Wrapper>
    </>
  );
}
