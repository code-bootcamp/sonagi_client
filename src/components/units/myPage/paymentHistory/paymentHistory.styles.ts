import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
`;

export const Top = styled.div`
  font-size: 1.125rem;
  margin-right: 30px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 0.813rem;
  }
`;

export const ChargeHistory = styled.th`
  border-bottom: 1px solid #d9d9d9;
  font-size: 0.938rem;
  color: black;
`;

export const TopWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 3% 0%;
`;

export const ListTitleRow = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid #bdbdbd;
  font-style: normal;
  font-weight: 500;
  font-size: 1.125rem;
  text-align: center;
  border-top: 2px solid;
  border-bottom: 2px solid;

  @media ${breakPoints.mobile} {
    font-size: 0.813rem;
  }
`;

export const NumberRow = styled.div`
  width: 20%;
  text-align: center;
`;

export const TitleRow = styled.div`
  width: 40%;
  text-align: center;
`;

export const WriterRow = styled.div`
  width: 20%;
  text-align: center;
`;

export const AtRow = styled.div`
  width: 20%;
  text-align: center;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    font-size: 0.813rem;
  }
`;

export const ListRow = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  text-align: center;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  text-align: center;
  /* background-color: gray; */
  @media ${breakPoints.mobile} {
    font-size: 0.813rem;
  }
`;

export const IndexColumn = styled.div`
  width: 20%;
  text-align: center;
`;

export const TitleColumn = styled.div`
  width: 40%;
  text-align: center;
`;

export const WriterColumn = styled.div`
  width: 20%;
  text-align: center;
  font-weight: 600;
`;

export const AtColumn = styled.div`
  width: 20%;
  text-align: center;
`;
