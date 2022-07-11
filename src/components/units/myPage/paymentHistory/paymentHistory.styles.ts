import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2%;
`;

export const MyNovel = styled.div`
  font-size: 1.125rem;
  color: #141414;
  @media (min-width: 768px) and (max-width: 2000px) {
    display: none;
  }
  @media (max-width: 767px) {
    box-shadow: inset 0 -14px #bee3ff;
    line-height: 24px;
    width: 113px;
    font-size: 1.563rem;
  }
`;

export const Top = styled.div`
  font-size: 1.125rem;
  color: #141414;
  margin-right: 30px;
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
  display: flex;
  margin: 3% 0%;
`;

export const TableWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TableTop = styled.th`
  border-bottom: 1px solid #d9d9d9;
  font-size: 0.938rem;
  color: black;
  padding: 8px;
`;

export const Table = styled.table`
  border-top: 1px solid #d9d9d9;
  border-collapse: collapse;
  margin-bottom: 70px;
  margin-top: 40px;
  width: 90%;
  @media ${breakPoints.tablet} {
    width: 70%;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const th = styled.th`
  border-bottom: 1px solid #d9d9d9;
`;

export const td = styled.td`
  border-bottom: 1px solid #d9d9d9;
  font-size: 1rem;
`;

export const TD = styled.td`
  border-bottom: 1px solid #d9d9d9;
  color: #2277d8;
  text-align: center;
  width: 70%;
  font-weight: 600;
`;

export const TableDate = styled.td`
  border-bottom: 1px solid #d9d9d9;
  font-size: 1rem;
  color: #4f4f4f;
  text-align: center;
  padding: 8px;
  @media ${breakPoints.mobile} {
    width: 40%;
  }
`;

export const TablePointSum = styled.td`
  border-bottom: 1px solid #d9d9d9;
  font-size: 1rem;
  font-weight: bold;
  color: #4f4f4f;
  text-align: center;
  padding: 8px;
`;

export const PageNation = styled.div`
  font-size: 1.5rem;
  width: 50%;
  margin-left: 28%;
  margin-bottom: 30px;
  @media ${breakPoints.tablet} {
    font-size: 1.2rem;
  }
  @media ${breakPoints.mobile} {
    /* width: 10%; */
    font-size: 1rem;
  }
`;
