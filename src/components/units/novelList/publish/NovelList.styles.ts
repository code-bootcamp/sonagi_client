import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 0px;

  @media (min-width: 991px) and (max-width: 1200px) {
    width: 98%;
    margin: 30px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 96%;
    /* margin: 20px; */
    margin: 2%;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    width: 96%;
    margin: 2%;
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
  margin: 20px 0px 0px;
  /* padding-bottom: 20px; */
`;

export const Category = styled.span`
  font-size: 1.5rem;
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
  margin-bottom: 70px;
`;

export const GridWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  flex-wrap: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;

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
  width: 98%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 10px;

  @media (min-width: 991px) and (max-width: 1200px) {
    width: 90%;
    padding: 0 5px;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    margin: 20px;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    width: 90%;
  }

  @media (max-width: 390px) {
    width: 90%;
  }
`;

export const ItemPic = styled.img`
  transition-duration: 1s;
  width: 13.125rem;
  height: 17.5rem;

  @media (min-width: 991px) and (max-width: 1200px) {
    transition-duration: 1s;
    width: 12.1875rem;
    height: 16.25rem;
  }

  @media (min-width: 768px) and (max-width: 991px) {
    transition-duration: 1s;
    width: 12.1875rem;
    height: 16.25rem;
  }

  @media (min-width: 391px) and (max-width: 767px) {
    transition-duration: 1s;
    /* width: 14.0625rem;
    height: 18.75rem; */
  }

  @media (max-width: 390px) {
    width: 11.25rem;
    height: 15rem;
  }
`;

export const BlankImage = styled.img``;

export const ItemInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;
export const ItemName = styled.div`
  font-size: 1.15rem;
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
