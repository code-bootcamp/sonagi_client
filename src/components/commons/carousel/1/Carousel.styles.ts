import styled from "@emotion/styled";
import Slider from "react-slick";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const MySlide = styled(Slider)`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 25px;
`;

export const BookImg = styled.img`
  width: 180px;
  height: 250px;
  padding: 0px 10px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 22px;
  color: #484848;
  padding: 10px;
`;
