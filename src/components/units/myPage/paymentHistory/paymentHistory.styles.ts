import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
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
  margin-left: 90px;
  margin-bottom: 70px;
  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 803px) {
    width: 60%;
  }
  @media (max-width: 786px) {
    width: 60%;
  }
  @media (min-width: 767px) and (max-width: 1190px) {
    width: 70%;
  }
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 727px) {
    width: 40%;
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
  width: 75%;
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

  margin: 0px 0px 100px 340px;
  @media (max-width: 767px) {
    margin-right: 40px;
  }
`;