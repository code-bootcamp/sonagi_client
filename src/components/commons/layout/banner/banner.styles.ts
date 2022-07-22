import styled from "@emotion/styled";
import Slider from "react-slick";

export const SliderWrapper = styled.div`
  width: 100%;
  cursor: pointer;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 100%;
    height: 320px;
    background-color: pink;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  }
`;

export const MySlide = styled(Slider)``;

export const CarouselImg = styled.img`
  width: 80vw;
`;
