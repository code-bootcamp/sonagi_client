import styled from "@emotion/styled";
import Slider from "react-slick";

export const SliderWrapper = styled.div`
  width: 100%;
  /* height: 500px; */
  /* background-color: gray; */

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

// export const CarouselBox = styled.div`
//   width: 100%;
//   height: 500px;
//   background-image: url("banner/carousel1.png");

//   @media (min-width: 767px) and (max-width: 991px) {
//     width: 100%;
//     height: 320px;
//     background-image: url("banner/carousel1.png");
//     background-size: 100%;
//     background-repeat: no-repeat;
//   }
// `;

// export const CarouselBox2 = styled.div`
//   width: 100%;
//   height: 500px;
//   background-image: url("banner/carousel2.png");

//   @media (min-width: 767px) and (max-width: 991px) {
//     width: 100%;
//     height: 320px;
//     background-image: url("banner/carousel2.png");
//     background-size: 100%;
//     background-repeat: no-repeat;
//   }
// `;

export const CarouselImg = styled.img`
  width: 80vw;
`;
