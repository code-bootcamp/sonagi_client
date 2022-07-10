import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
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
  font-size: 18px;
  color: #141414;
  margin-right: 30px;
`;

export const ChargeHistory = styled.th`
  border-bottom: 1px solid #d9d9d9;
  font-size: 15px;
  color: black;
`;

export const TopWrapper = styled.div`
  display: flex;
  margin: 20px 0px 50px 10px;
`;

export const TableTop = styled.th`
  border-bottom: 1px solid #d9d9d9;
  font-size: 15px;
  color: black;
  padding: 8px;
`;

export const Table = styled.table`
  border-top: 1px solid #d9d9d9;
  border-collapse: collapse;
  margin-left: 30px;
  margin-bottom: 70px;
  width: 80%;
  @media ${breakPoints.tablet} {
    width: 70%;
  }
  @media ${breakPoints.mobile} {
    width: 30%;
  }
`;

export const th = styled.th`
  border-bottom: 1px solid #d9d9d9;
`;

export const td = styled.td`
  border-bottom: 1px solid #d9d9d9;
  font-size: 16px;
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
  font-size: 16px;
  color: #4f4f4f;
  text-align: center;
  padding: 8px;
`;

export const TablePointSum = styled.td`
  border-bottom: 1px solid #d9d9d9;
  font-size: 16px;
  font-weight: bold;
  color: #4f4f4f;
  text-align: center;
  padding: 8px;
`;

export const PageNation = styled.div`
  font-size: 24px;
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
