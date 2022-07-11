import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 20px;

  @media ${breakPoints.tablet} {
    width: 96%;
    margin: 5% 20px 0px;
  }

  @media ${breakPoints.mobile} {
    width: 96%;
    margin: 5% 10px 0px;
  }

  @media (min-width: 391px) and (max-width: 640px) {
    width: 90%;
  }

  @media (max-width: 390px) {
    width: 90%;
  }
`;

export const Title = styled.label`
  width: 98%;
  font-size: 2.25rem;
  font-weight: 700;
  color: #4d4d4d;
  margin-bottom: 2%;
  margin-left: 2%;

  @media ${breakPoints.tablet} {
    width: 96%;
    font-size: 1.5em;
  }

  @media ${breakPoints.mobile} {
    width: 96%;
    font-size: 1.75em;
    margin-left: 0%;
    margin-bottom: 20px;
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 98%;
  margin: 1% 2%;

  @media ${breakPoints.tablet} {
    margin: 0%;
  }

  @media ${breakPoints.mobile} {
    margin: 0%;
  }
`;

export const Category = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  color: #484848;
  margin-right: 4%;
  cursor: pointer;

  background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.8s;
  background-image: linear-gradient(transparent 60%, #bee3ff 40%);
  :hover {
    background-size: 100% 100%;
  }

  @media ${breakPoints.tablet} {
    font-size: 1.25em;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.125em;
  }
`;

export const Arrow = styled.img`
  width: 6.5px;
  height: 13px;
`;

export const ColumnWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GridWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  /* column-gap: 30px; */
  padding: 0 10px;
  margin: 0px 0 50px;
  align-items: center;
  justify-content: center;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    width: 90%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    grid-template-columns: 1fr 1fr 1fr;
    width: 90%;
  }

  @media (min-width: 391px) and (max-width: 640px) {
    transition-duration: 1s;
    grid-template-columns: 1fr 1fr;
    align-self: center;
    justify-self: center;
    width: 90%;
  }

  @media (max-width: 390px) {
    transition-duration: 1s;
    grid-template-columns: 1fr 1fr;
    align-self: center;
    justify-self: center;
    width: 90%;
    margin: 0 2%;
  }
`;

export const ItemWrap = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 30px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 90%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 90%;
    padding: 0px 20px 10px;
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
    width: 150px;
    height: 200px;
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
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
  margin-right: 25px;

  @media ${breakPoints.tablet} {
    font-size: 1.125rem;
    margin-right: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 1.125rem;
    margin-right: 20px;
  }
`;
export const ItemNum = styled.div`
  background-color: #eee;
  padding: 5px;

  @media ${breakPoints.tablet} {
    padding: 3px;
    font-size: 0.875em;
  }

  @media ${breakPoints.mobile} {
    padding: 3px;
    font-size: 0.875em;
  }
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
