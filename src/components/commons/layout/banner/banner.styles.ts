import styled from "@emotion/styled";
import Slider from "react-slick";

export const SliderWrapper = styled.div`
  width: 1200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const MySlide = styled(Slider)`
  width: 1200px;
  height: 500px;
`;

export const CarouselBox = styled.div`
  width: 1200px;
  height: 500px;
`;

export const CarouselImg = styled.img`
  width: 1200px;
  height: 500px;
`;
