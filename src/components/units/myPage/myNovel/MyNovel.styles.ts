import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const MyNovel = styled.div`
  margin-top: 65px;
  font-size: 1.5rem;
  color: #141414;
  @media ${breakPoints.mobile} {
    box-shadow: inset 0 -14px #bee3ff;
    line-height: 24px;
    width: 113px;
    font-size: 1.3rem;
  }
`;

export const Img = styled.img`
  border-radius: 8px 0 0 8px;
`;

export const Bottom = styled.div`
  font-size: 0.875rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 100px;
  @media ${breakPoints.mobile} {
    padding: 0 10px;
  }
`;

export const Title = styled.div`
  font-size: 1.125rem;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const Genre = styled.div`
  font-size: 1rem;

  @media ${breakPoints.mobile} {
    font-size: 0.7rem;
  }
`;

export const Time = styled.div`
  font-size: 0.875rem;
  color: #cccccc;
  margin-left: 15px;

  @media ${breakPoints.mobile} {
    font-size: 0.7rem;
  }
`;

export const GenreFlex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

export const BoxFlex = styled.div`
  display: flex;
  align-self: flex-end;
  padding-top: 20px;
  @media ${breakPoints.mobile} {
    margin-right: 10px;
  }
`;

export const InnerFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 20px;

  @media ${breakPoints.mobile} {
    flex-direction: column;
    margin: 0 0 0 5px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
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

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 30px;
    font-size: 0.7rem;
    margin-right: 10px;
  }
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

  @media ${breakPoints.mobile} {
    width: 80px;
    height: 30px;
    font-size: 0.7rem;
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
  margin-top: 40px;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
  display: flex;
  align-items: center;

  @media ${breakPoints.mobile} {
  }
`;

export const ImgWrapper = styled.div``;
