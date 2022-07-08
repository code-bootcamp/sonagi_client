import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MySlide = styled(Slider)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
`;

export const BookImg = styled.img`
  width: 12.5vw;

  padding: 0px 10px;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 100%;
    height: 170px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 22px;
  color: #484848;
  padding: 10px;
`;
