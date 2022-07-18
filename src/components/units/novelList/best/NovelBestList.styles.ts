import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 96%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 4.05% 2%;
`;
export const Title = styled.label`
  font-size: 1.875rem;
  font-weight: 700;
  color: #4d4d4d;
  padding-bottom: 30px;
`;
export const GridWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
  justify-content: flex-start;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    margin: 0px 10px;
  }

  @media ${breakPoints.mobile} {
    margin: 0px 10px;
  }
`;
export const ItemWrap = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 48%;
  margin: 2% 1%;
  padding: 0 3px;
  overflow: hidden;

  border: 1px solid #bdbdbd;
  border-radius: 30px;

  @media (min-width: 768px) and (max-width: 990px) {
    transition-duration: 1s;
    flex-basis: 46%;
    margin: 2%;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    transition-duration: 1s;
    flex-basis: 33.3333%;
  }

  @media (max-width: 390px) {
    transition-duration: 1s;
    flex-basis: 49%;
  }

  /* @media (min-width: 391px) and (max-width: 767px) {
    width: 96%;
    margin: 2%;
  }

  @media (max-width: 390px) {
    width: 96%;
    margin: 2%;
  } */
`;
export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 30px 10px;

  @media (min-width: 391px) and (max-width: 767px) {
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 390px) {
    align-items: center;
    justify-content: center;
  }
`;
export const AwardIcon = styled.img`
  width: 40px;
  height: 40px;
`;
export const AwardNum = styled.div`
  font-size: 1.63rem;
  color: #2277d8;
`;
export const AwardText = styled.div`
  font-size: 1.13rem;
`;

export const Itembox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 10px;

  @media (min-width: 391px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const ItemPic = styled.img`
  width: 100%;
  min-width: 12vw;
  min-height: 15vw;
  max-width: 14vw;
  max-height: 17vw;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  border-radius: 8px;
  vertical-align: middle;
`;
export const TextWrap = styled.div`
  padding: 0px 10px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const RowWrap2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 39px;

  @media (min-width: 391px) and (max-width: 767px) {
    margin-bottom: 0px;
  }

  @media (max-width: 390px) {
    margin-bottom: 0px;
  }
`;

export const ItemName = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 10px;

  @media (min-width: 391px) and (max-width: 767px) {
    margin-right: 50px;
  }

  @media (max-width: 390px) {
    margin: 0 20px;
  }
`;

export const BookmarkX = styled.img`
  width: 18px;
  height: 18px;
`;

export const HeartImg = styled.div`
  width: 23px;
  height: 21px;
  background-image: ${(props: any) =>
    props.HeartList?.includes(props.el)
      ? "url(/novelList/best/heart1.png)"
      : "url(/novelList/best/heart2.png)"};
`;

export const ItemPickIcon = styled.img`
  width: 14px;
  height: 20px;
`;
export const Contents = styled.div`
  font-size: 0.88rem;
  color: #808080;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;

  @media (min-width: 391px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;
export const ItemInfoWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
  font-size: 0.88rem;
  color: #808080;

  @media (min-width: 391px) and (max-width: 767px) {
    display: none;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    flex-direction: column;
  }

  @media (max-width: 390px) {
    flex-direction: column;
  }
`;
export const ItemStatus = styled.div``;
export const Line = styled.div`
  width: 1px;
  height: 13px;
  background-color: #bdbdbd;
  margin: 0px 20px;

  @media (min-width: 391px) and (max-width: 767px) {
    display: none;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;
export const Hits = styled.div``;
export const WrtiterName = styled.div``;
