import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 50px;
`;

export const MySlide = styled(Slider)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
`;

export const BookImg = styled.img`
  height: 250px;
  cursor: pointer;
  padding: 0px 10px;

  &:hover {
    padding: 0 5px;
    height: 260px;
    transition: 0.5s;
  }

  @media ${breakPoints.tablet} {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    width: 100%;
    height: 270px;

    &:hover {
      height: 280px;
      transition: 0.5s;
    }
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 22px;
  color: #484848;
  padding: 10px;
`;
