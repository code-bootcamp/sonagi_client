import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const MyNovel = styled.div`
  font-size: 1.125rem;
  color: #141414;
  @media (max-width: 767px) {
    box-shadow: inset 0 -14px #bee3ff;
    line-height: 24px;
    width: 113px;
    font-size: 1.563rem;
  }
`;

export const Img = styled.img`
  border-radius: 8px;
`;

export const Bottom = styled.div`
  font-size: 0.875rem;
`;

export const Wrapper = styled.div`
  /* width: 1000px; */
  display: flex;
  width: 100%;
  @media ${breakPoints.mobile} {
    margin-left: 10%;
  }
  @media ${breakPoints.tablet} {
  }
`;

export const Box = styled.div`
  width: 830px;
  height: 110px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  margin-top: 40px;
  @media ${breakPoints.mobile} {
    width: 600px;
    margin-left: 10%;
  }
  @media ${breakPoints.tablet} {
    width: 700px;
  }
`;

export const Title = styled.div`
  font-size: 1.125rem;
`;

export const Genre = styled.div`
  font-size: 1rem;
`;

export const Time = styled.div`
  font-size: 0.875rem;
  color: #cccccc;
  margin-left: 15px;
`;

export const GenreFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  width: 150px;
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
`;

export const BoxFlex = styled.div`
  display: flex;
  margin-left: 20%;
`;

export const InnerFlex = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-left: 10px; */
`;

export const Button1 = styled.div`
  width: 117px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  border-radius: 8px;
`;

export const Button2 = styled.div`
  width: 91px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
`;

export const MyPageFont = styled.div`
  font-size: 2rem;
  margin-bottom: 50px;
`;

export const ImageWrapper = styled.div`
  width: 20%;
`;

export const BoxWrapper = styled.div`
  width: 100%;
`;

export const ImgWrapper = styled.div``;
