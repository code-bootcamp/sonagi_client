import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const MyNovel = styled.div`
  font-size: 1.125rem;
`;

export const Img = styled.img`
  width: 250px;
  height: 280px;
  border-radius: 8px 0 0 8px;

  @media ${breakPoints.mobile} {
    width: 170px;
  }
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
`;

export const Bottom = styled.div`
  font-size: 0.875rem;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

export const HamburgerWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    width: 100%;
    justify-content: right;
  }
`;

export const Title = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Genre = styled.div`
  font-size: 1.2rem;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const Time = styled.div`
  font-size: 1rem;
  color: #cccccc;
  padding-left: 15px;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    padding-left: 0px;
  }
`;

export const GenreFlex = styled.div`
  display: flex;
  align-items: center;
  padding-top: 15px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    padding: 10px 0px;
  }
`;

export const BoxFlex = styled.div`
  display: flex;
  @media ${breakPoints.mobile} {
  }
`;

export const InnerFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media ${breakPoints.mobile} {
    padding: 0 5px;
  }
`;

export const Column = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding-bottom: 10px;
  }
`;

export const Button1 = styled.div`
  width: 110px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border-radius: 8px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 70px;
    height: 35px;
    font-size: 0.7rem;
  }
`;

export const WriteButton = styled.div`
  width: 110px;
  height: 40px;
  background-color: #ffffff;
  color: #2277d8;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  border: 1px solid #2277d8;
  border-radius: 8px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 30px;
    font-size: 0.7rem;
    margin-right: 10px;
  }
`;

export const MyPageFont = styled.div`
  font-size: 2rem;
  margin-bottom: 50px;
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  height: 282px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

export const ImgWrapper = styled.div`
  height: 100%;
`;
