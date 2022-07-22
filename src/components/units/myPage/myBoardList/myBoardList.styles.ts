import styled from "@emotion/styled";
export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  width: 100%;
`;

export const Wrapper = styled.div`
  width: 80%;
  padding-top: 56px;
  padding-right: 300px;
  padding-left: 40px;
`;

export const WrapperHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const ProductMenu = styled.div<{ isPickList: boolean }>`
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: ${(props) => (props.isPickList ? "normal" : 800)};
  font-size: ${(props) => (props.isPickList ? "18px" : "25px")};
  line-height: 24px;
  margin-right: 25px;
  color: ${(props) => (props.isPickList ? "#7e7e7e" : "#2277d8")};
  cursor: pointer;
`;

export const PickMenu = styled.div<{ isPickList: boolean }>`
  font-style: normal;
  font-weight: ${(props) => (props.isPickList ? 800 : "normal")};
  font-size: ${(props) => (props.isPickList ? "25px" : "18px")};
  line-height: 24px;
  color: ${(props) => (props.isPickList ? "#2277d8" : "#7e7e7e")};
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
`;

export const RowName = styled.div`
  height: 52px;
  width: 180%;
  display: flex;
  flex-direction: row;
  text-align: center;
  border-top: 1px solid #bdbdbd;
  align-items: center;
  margin-top: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;

export const ColumnName = styled.div`
  width: 30%;
  font-weight: 700;
  font-size: 1.15rem;
`;

export const Row = styled.div`
  height: 52px;
  width: 180%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border-top: 1px solid #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
  cursor: pointer;
`;

export const CommentsRow = styled.div`
  height: 52px;
  width: 180%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border-top: 1px solid #bdbdbd;
  font-family: Noto Sans CJK KR;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;

export const Column = styled.div`
  width: 30%;
`;

export const ColumnContents = styled.div`
  width: 20%;
  font-size: 1.15rem;

  line-height: 24px;
  text-align: center;
  color: black;
  font-weight: 700;
`;

export const ColumnInnerContents = styled.div`
  width: 20%;
  font-size: 1rem;
  line-height: 24px;
  text-align: center;
  color: black;
`;

export const ColumnTitle = styled.div`
  width: 50%;
  font-weight: 700;
  font-size: 1.15rem;
`;

export const ColumnCommentTitle = styled.div`
  width: 50%;
`;

export const PickColumnTitle = styled.div`
  width: 40%;
`;
export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
export const SearchInput = styled.input`
  width: 368px;
  height: 52px;
  background: #f2f2f2;
  margin-right: 24px;
  border: none;
`;
export const WrapperBody = styled.div`
  display: flex;
  flex-direction: column;
`;
