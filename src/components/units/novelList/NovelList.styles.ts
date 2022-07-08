import styled from "@emotion/styled";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

export const Title = styled.label`
  font-size: 36px;
  font-weight: 500;
  color: #4d4d4d;
  margin-bottom: 20px;
`;
export const MoreBtn = styled.div`
  text-align: right;
  margin-right: 20px;
  margin-bottom: 10px;
`;

export const GridWrap = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const ItemWrap = styled.div`
  margin-bottom: 50px;
`;

export const ItemPic = styled.img`
  width: 180px;
  height: 240px;
`;

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0px;
`;
export const ItemName = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-right: 65px;
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
export const WrtiterName = styled.div``;
export const Contents = styled.div`
  font-size: 14px;
`;
