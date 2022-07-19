import * as S from "./Carousel.styles";
export default function CarouselPresenter(props) {
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
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <>
      <S.Wrapper>
        <S.Title>인기 소설</S.Title>
        <S.MySlide class="novel-slick" {...settings}>
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
    </>
  );
}
