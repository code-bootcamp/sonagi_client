import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";
export const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2%;
  width: 100%;
  @media ${breakPoints.mobile} {
    margin-bottom: 70px;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  padding-top: 56px;
  padding-right: 300px;
  padding-left: 40px;
  @media ${breakPoints.tablet} {
    width: 110%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HamburgerWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    display: flex;
    margin-left: 920%;
  }
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
  @media ${breakPoints.tablet} {
    /* font-size: 1.2rem; */
    width: 55%;
  }
  @media ${breakPoints.mobile} {
    font-size: ${(props) => (props.isPickList ? "15px" : "22px")};
  }
`;

export const PickMenu = styled.div<{ isPickList: boolean }>`
  font-style: normal;
  font-weight: ${(props) => (props.isPickList ? 800 : "normal")};
  font-size: ${(props) => (props.isPickList ? "25px" : "18px")};
  line-height: 24px;
  color: ${(props) => (props.isPickList ? "#2277d8" : "#7e7e7e")};
  cursor: pointer;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    font-size: ${(props) => (props.isPickList ? "22px" : "15px")};
  }
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  @media ${breakPoints.tablet} {
    width: 370px;
  }
  @media ${breakPoints.mobile} {
    width: 300px;
    margin-left: 230px;
  }
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
  width: 10%;
  font-weight: 700;
  font-size: 1.15rem;
  @media ${breakPoints.mobile} {
    width: 13%;
  }
`;

export const date = styled.div`
  width: 50%;
  font-weight: 700;
  font-size: 1.15rem;
`;

export const CreateAt = styled.div`
  width: 52%;
  font-weight: 700;
  font-size: 1.15rem;
  @media ${breakPoints.mobile} {
    display: none;
  }
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
  width: 10%;
`;

export const ColumnDate = styled.div`
  width: 50%;
`;
export const CreateAtColumn = styled.div`
  width: 52%;
  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const ColumnContents = styled.div`
  width: 20%;
  font-size: 1.15rem;

  line-height: 24px;
  text-align: center;
  color: black;
  font-weight: 700;
  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const ColumnInnerContents = styled.div`
  width: 20%;
  font-size: 1rem;
  line-height: 24px;
  text-align: center;
  color: black;
  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const ColumnTitle = styled.div`
  width: 40%;
  font-weight: 700;
  font-size: 1.15rem;
  @media ${breakPoints.mobile} {
    width: 45%;
  }
`;

export const ColumnCommentTitle = styled.div`
  width: 40%;
  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;

export const ColumnContentss = styled.div`
  width: 60%;
`;

export const CommentContents = styled.div`
  width: 60%;
  font-weight: 700;
  font-size: 1.15rem;
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
  @media ${breakPoints.tablet} {
    width: 65%;
  }
  @media ${breakPoints.mobile} {
    width: 386%;
    margin-left: 118px;
  }
`;
