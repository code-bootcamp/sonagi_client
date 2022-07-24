import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

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

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3% 0;
`;

export const GridWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
`;

export const DonateNovel = styled.div`
  font-size: 1.125rem;
`;

export const DonateListButton = styled.div`
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

export const BoxWrapper = styled.div`
  width: 46%;
  margin: 2%;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1100px) {
    width: 96%;
    margin: 2%;
  }
`;

export const ImgWrapper = styled.div`
  height: 100%;
`;

export const InnerFlex = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Column = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
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
  margin-right: 8px;
  border-radius: 8px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 62px;
    height: 35px;
    font-size: 0.7rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  width: 180px;
  height: 220px;
  border-radius: 8px 0 0 8px;
`;

export const Title = styled.div`
  height: 60px;
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
  padding: 15px 0px;

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
