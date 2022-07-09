import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10% 0%;
`;
export const SearchInputWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px 0px;

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 90%;
  }
`;
export const SearchInput = styled.input`
  border: none;
  border-bottom: 1px solid #bdbdbd;
  width: 636px;
  height: 35px;
  background-image: url("../search/search.svg");
  background-repeat: no-repeat;
  background-position: 10px;
  padding: 10px 60px;

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 90%;
  }
`;

// 태그 wrap
export const TagWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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
  line-height: 40px;
  text-align: center;
  margin: 0px 10px;
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;

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

// 소설 낱개
export const ItemWrap = styled.div`
  display: flex;
  flex-direction: row;

  @media ${breakPoints.tablet} {
    width: 90%;
  }

  @media ${breakPoints.mobile} {
    width: 96%;
    display: flex;
    flex-flow: row wrap;
  }
`;
export const ItemPic = styled.img`
  width: 180px;
  height: 240px;
`;
export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;
export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;
export const ItemName = styled.div`
  font-size: 1.5em;
  font-weight: 700;

  @media ${breakPoints.mobile} {
    padding: 2px;
    font-size: 1.25em;
  }
`;
export const ItemPlus = styled.div`
  background-color: #eee;
  padding: 5px;
  margin-left: 20px;
  font-size: 1em;

  @media ${breakPoints.tablet} {
    padding: 2px;
    font-size: 0.8em;
  }
  @media ${breakPoints.mobile} {
    padding: 2px;
    font-size: 0.8em;
  }
`;
export const WriterIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const Writer = styled.div`
  font-size: 1em;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;
export const Contents = styled.div`
  width: 150px;
  margin-top: 20px;
  color: #808080;
  font-size: 0.8em;
`;
