import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 10px 80px;

  @media ${breakPoints.mobile} {
    margin: 0px 10px 80px;
  }
`;

export const Title = styled.label`
  font-size: 1.875rem;
  font-weight: 700;
  color: #4d4d4d;
  margin-top: 30px;
  padding-bottom: 50px;

  @media (max-width: 390px) {
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Category = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  color: #484848;
  margin-right: 50px;
  cursor: pointer;

  background-image: linear-gradient(transparent calc(100% - 3px), #000 3px);
  background-repeat: no-repeat;
  background-size: 0% 100%;
  transition: background-size 0.8s;
  background-image: linear-gradient(transparent 60%, #bee3ff 40%);
  :hover {
    background-size: 100% 100%;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    font-size: 1.25em;
  }

  @media (max-width: 390px) {
    font-size: 1.25em;
  }
`;

export const Arrow = styled.img`
  width: 6.5px;
  height: 13px;
`;

export const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
  justify-content: flex-start;

  @media ${breakPoints.tablet} {
    margin: 0px 10px;
  }

  @media ${breakPoints.mobile} {
    margin: 0px 10px;
  }
`;

export const ItemWrap = styled.div`
  border: 0;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 20%;
  margin: 20px 0 10px 0;
  padding: 0 3px;
  overflow: hidden;

  @media (min-width: 768px) and (max-width: 990px) {
    transition-duration: 1s;
    flex-basis: 25%;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    transition-duration: 1s;
    flex-basis: 33.3333%;
  }

  @media (max-width: 390px) {
    transition-duration: 1s;
    flex-basis: 49%;
  }
`;

export const ItemPic = styled.img`
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 8px;
  vertical-align: middle;
`;

export const ItemInfo = styled.div`
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin: 20px 0px;
`;
export const ItemName = styled.h4`
  width: 70%;
  height: 7vh;
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;

  @media (min-width: 768px) and (max-width: 990px) {
    width: 96%;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    width: 96%;
    font-size: 1.125rem;
    height: 5vh;
  }

  @media (max-width: 390px) {
    width: 96%;
    font-size: 1.25rem;
  }
`;

export const Cycle = styled.p`
  width: 30%;
  font-size: 0.75em;
  margin: 0;
  padding: 4px;
  text-align: center;
  background-color: aliceblue;

  @media (min-width: 391px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;
export const ItemWriterWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
export const WriterIcon = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 7px;
`;
export const WrtiterName = styled.div`
  font-size: 1rem;

  @media (min-width: 391px) and (max-width: 767px) {
    font-size: 0.875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;
  }
`;
export const Contents = styled.div`
  width: 100%;
  font-size: 0.94rem;
  color: #00000078;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin-top: 10px;

  @media (min-width: 391px) and (max-width: 767px) {
    font-size: 0.88rem;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eee;
  margin: 40px 0 80px;
`;
