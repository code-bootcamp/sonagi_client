import styled from "@emotion/styled";
// import { breakPoints } from "../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 10px;

  @media (min-width: 991px) and (max-width: 1200px) {
    width: 98%;
    margin: 30px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 96%;
    margin: 20px;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    width: 90%;
  }

  @media (max-width: 390px) {
    width: 90%;
  }
`;

export const Title = styled.label`
  font-size: 1.875rem;
  font-weight: 700;
  color: #4d4d4d;
  padding-bottom: 30px;

  @media (min-width: 768px) and (max-width: 991px) {
    width: 96%;
    margin: 20px;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    width: 90%;
  }

  @media (max-width: 390px) {
    width: 90%;
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0px;
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
`;

export const Arrow = styled.img`
  width: 6.5px;
  height: 13px;
`;

export const ColumnWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GridWrap = styled.div`
  width: 100%;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  padding: 0 10px;
  margin: 0px 0 50px; */

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  flex-wrap: row;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;

  @media (min-width: 991px) and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 390px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

export const ItemWrap = styled.div`
  margin-bottom: 50px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  padding-right: 20px;

  :last-child {
    padding-right: 0;
  }
`;

export const ItemPic = styled.img`
  width: 210px;

  @media (min-width: 991px) and (max-width: 1200px) {
    transition-duration: 1s;
    width: 98%;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    transition-duration: 1s;
    width: 96%;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    transition-duration: 1s;
    width: 92%;
  }

  @media (max-width: 390px) {
    width: 90%;
  }
`;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;
export const ItemName = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 25px;

  @media (min-width: 391px) and (max-width: 767px) {
    font-size: 1.125rem;
    margin-right: 10px;
  }

  @media (max-width: 390px) {
    font-size: 1.25rem;
  }
`;
export const ItemNum = styled.div`
  background-color: #eee;
  padding: 5px;
`;
export const ItemWriterWrap = styled.div`
  width: 100%;
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

  @media (min-width: 391px) and (max-width: 767px) {
    font-size: 0.875rem;
  }

  @media (max-width: 390px) {
    font-size: 0.875rem;
  }
`;
export const Contents = styled.div`
  width: 100%;
  font-size: 0.875rem;

  @media (min-width: 391px) and (max-width: 767px) {
    font-size: 0.875rem;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;
