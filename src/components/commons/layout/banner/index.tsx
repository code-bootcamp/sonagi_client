import * as S from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner() {
  const settings = {
    infinite: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
  };

  return (
    <>
      <S.SliderWrapper>
        <S.MySlide {...settings}>
          <S.CarouselBox>
            <S.CarouselImg src="/banner/carousel1.png" />
          </S.CarouselBox>
          <S.CarouselBox>
            <S.CarouselImg src="/banner/carousel2.png" />
          </S.CarouselBox>
          <S.CarouselBox>
            <S.CarouselImg src="/banner/carousel3.png" />
          </S.CarouselBox>
        </S.MySlide>
      </S.SliderWrapper>
    </>
  );
}
