import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { ITextTokenProps } from "../novelList/publish/NovelList.types";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5% 0%;
`;
export const SearchInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 50px;

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 90%;
  }
`;
export const SearchbarInput = styled.input`
  border: none;
  border-bottom: 1px solid #bdbdbd;
  width: 636px;
  height: 35px;
  background-image: url("../search/search.svg");
  background-repeat: no-repeat;
  background-position: 10px;
  padding: 25px 60px;

  &:focus {
    outline: none;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 90%;
  }
`;

// 태그 wrap
export const TagWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin-bottom: 80px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 96%;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: center;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 92%;
    flex-flow: row wrap;
    margin-bottom: 40px;
  }
`;

// 태그 낱개
export const Tag = styled.div`
  width: 100%;
  height: 40px;
  background-color: #fff;
  color: #2277d8;
  border: 1px solid #2277d8;
  border-radius: 20px;
  line-height: 36px;
  text-align: center;
  margin: 0px 15px;
  cursor: pointer;

  :hover {
    background-color: #2277d8;
    color: #fff;
  }

  @media ${breakPoints.tablet} {
    width: 40%;
    margin-right: 2%;
    margin-bottom: 2%;
  }

  @media ${breakPoints.mobile} {
    margin-bottom: 20px;
  }
`;

// 소설 목록 wrap
export const ItemRowWrap = styled.div`
  width: 100%;
  padding: 2%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media ${breakPoints.tablet} {
    width: 96%;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${breakPoints.mobile} {
    width: 96%;
    display: flex;
    flex-flow: row wrap;
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

export const ItemPlus = styled.div`
  width: 30%;
  background-color: #eee;
  padding: 5px;
  margin-left: 13px;
  font-size: 1em;
  text-align: center;

  @media ${breakPoints.tablet} {
    padding: 2px;
    font-size: 0.8em;
  }
  @media ${breakPoints.mobile} {
    padding: 2px;
    font-size: 0.8em;
  }
`;

export const Writer = styled.div`
  font-size: 1em;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;

export const GridWrap = styled.div`
  width: 96%;

  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
  justify-content: center;

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
export const TextToken = styled.span`
  color: ${(props: ITextTokenProps) =>
    props.isMatched ? "#2277D8" : "#484848"};
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

  @media (min-width: 391px) and (max-width: 767px) {
    font-size: 1.125rem;
  }

  @media (max-width: 390px) {
    font-size: 1.25rem;
  }
`;
export const ItemNum = styled.p`
  /* background-color: #eee;
  font-size: 0.875em;
  padding: 5px;
  margin: 0; */
`;

export const Cycle = styled.p`
  font-size: 0.75em;
  margin: 0;
  padding: 4px;
  background-color: aliceblue;
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
