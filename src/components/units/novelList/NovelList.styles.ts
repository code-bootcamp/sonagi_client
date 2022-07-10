import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 5% 2%;
`;

export const Title = styled.label`
  width: 100%;
  font-size: 2.25rem;
  font-weight: 500;
  color: #4d4d4d;
  margin-bottom: 20px;

  @media ${breakPoints.tablet} {
    width: 96%;
  }

  @media ${breakPoints.mobile} {
    width: 96%;
    margin: 0 2%;
  }
`;
export const MoreBtn = styled.div`
  width: 96%;
  text-align: right;
  margin: 0;
  margin-bottom: 10px;

  @media ${breakPoints.tablet} {
    width: 96%;
    margin-right: 0px;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 90%;
  }
`;

export const GridWrap = styled.div`
  width: 96%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 90%;
    margin: 0 2%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    grid-template-columns: 1fr 1fr 1fr;
    width: 96%;
    margin: 0 2%;
  }
`;

export const ItemWrap = styled.div`
  margin-bottom: 50px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 90%;
    margin: 0 2%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 96%;
    margin: 0 2%;
  }
`;

export const ItemPic = styled.img`
  width: 180px;
  height: 240px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 165px;
    height: 210px;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 165px;
    height: 210px;
  }
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;

  @media ${breakPoints.tablet} {
    margin-bottom: 10% 0;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: 10% 0;
  }
`;
export const ItemName = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 45px;

  @media ${breakPoints.tablet} {
    font-size: 1.125rem;
    margin-right: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.125rem;
    margin-right: 0px;
  }
`;
export const ItemNum = styled.div`
  background-color: #eee;
  padding: 5px;
`;
export const ItemWriterWrap = styled.div`
  display: flex;
  flex-direction: row;
`;
export const WriterIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const WrtiterName = styled.div`
  font-size: 1rem;

  @media ${breakPoints.tablet} {
    font-size: 0.875rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.875rem;
  }
`;
export const Contents = styled.div`
  font-size: 0.875rem;

  @media ${breakPoints.tablet} {
    font-size: 0.813em;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.813rem;
  }
`;
