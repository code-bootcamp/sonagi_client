import * as S from "./banner.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";

export default function LayoutBanner() {
  const { onClickMoveToPage } = useMoveToPage();

  const settings = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <>
      <S.SliderWrapper onClick={onClickMoveToPage("/event")}>
        <S.MySlide {...settings}>
          <S.CarouselImg src="/banner/carousel1.png" />
          <S.CarouselImg src="/banner/carousel2.png" />
          <S.CarouselImg src="/banner/carousel3.png" />
          <S.CarouselImg src="/banner/carousel4.png" />
        </S.MySlide>
      </S.SliderWrapper>
    </>
  );
}
