import * as S from "./Carousel.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselPresenter(props: any) {
  const settings = {
    centerMode: true,
    infinite: true,
    slidesToShow: 6,
    arrows: true,
    slidesToScroll: 1,
    speed: 500,
    slidesPerRow: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0px",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <S.Wrapper>
      <S.Title>인기 소설</S.Title>
      <S.MySlide {...settings}>
        {props.LikeData?.fetchNovelsPage.novels.map((el: any) => (
          <S.BookImg
            id={el.id}
            onClick={props.onClickNovelDetail(el)}
            key={el.id}
            src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0].url}`}
          />
        ))}
      </S.MySlide>
      <S.Title>최신 작품</S.Title>
      <S.MySlide {...settings}>
        {props.LastData?.fetchNovelsPage.novels.map((el: any) => (
          <S.BookImg
            id={el.id}
            onClick={props.onClickNovelDetail(el)}
            key={el.id}
            src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0].url}`}
          />
        ))}
      </S.MySlide>
      <S.Title>오늘 연재 소설</S.Title>
      <S.MySlide {...settings}>
        {props.TodayData?.fetchNovelsPage.novels.map((el: any) => (
          <S.BookImg
            id={el.id}
            onClick={props.onClickNovelDetail(el)}
            key={el.id}
            src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0].url}`}
          />
        ))}
      </S.MySlide>
    </S.Wrapper>
  );
}
