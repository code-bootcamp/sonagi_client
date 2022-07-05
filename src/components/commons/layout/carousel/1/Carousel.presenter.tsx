import * as S from "./Carousel.styles";
export default function CarouselPresenter() {
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
  };

  const Img1 = [1, 2, 3, 4, 5, 6, 7];

  return (
    <S.Wrapper>
      <S.Title>인기 소설</S.Title>
      <S.MySlide {...settings}>
        {Img1?.map((item: any) => (
          <S.BookImg
            key={item.length}
            src={`/mainpage/bookimg/${item}.webp`}
            // onMouseEnter={props.onClickDetail(item)}
          />
        ))}
      </S.MySlide>
      <S.Title>최신 작품</S.Title>
      <S.MySlide {...settings}>
        {Img1?.map((item: any) => (
          <S.BookImg
            key={item.length}
            src={`/mainpage/bookimg/${item}.webp`}
            // onMouseEnter={props.onClickDetail(item)}
          />
        ))}
      </S.MySlide>
      <S.Title>기다리면 무료</S.Title>
      <S.MySlide {...settings}>
        {Img1?.map((item: any) => (
          <S.BookImg
            key={item.length}
            src={`/mainpage/bookimg/${item}.webp`}
            // onMouseEnter={props.onClickDetail(item)}
          />
        ))}
      </S.MySlide>
    </S.Wrapper>
  );
}
