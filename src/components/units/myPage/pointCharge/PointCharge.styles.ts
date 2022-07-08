import styled from "@emotion/styled";

export const Input = styled.input``;

export const MyPoint = styled.div`
  font-size: 18px;
`;

export const MySonagiPoint = styled.div`
  font-size: 18px;
`;
export const PointAmount = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: #2277d8;
`;
export const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1%;
`;

export const InnerTableLeft = styled.div`
  margin-left: 1%;
`;

export const InnerTableContents = styled.div`
  width: 50%;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

export const TopFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 3% 0% 3% 0%;
`;

export const TableTop = styled.div`
  font-size: 22px;
  color: #484848;
  margin: 2% 70% 2% 0%;
  font-weight: 700;
`;

export const TitleAmount = styled.div`
  font-size: 24px;
  color: #2277d8;
`;

export const AmountWon = styled.div`
  font-size: 24px;
  color: #4f4f4f;
`;

export const TableBorder = styled.div`
  width: 850px;
  height: 510px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #484848;
`;

export const InnerTable = styled.div`
  width: 725px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
  :hover {
    background-color: #bee3ff;
    opacity: 90%;
    border: 1px solid #2277d8;
  }
  background-color: ${(props: any) =>
    props.el === props.value ? "#bee3ff" : "default"};
  opacity: ${(props: any) => (props.el === props.value ? "90%" : "default")};
  border: ${(props: any) =>
    props.el === props.value ? "1px solid #2277d8" : "default"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3%;
`;

export const HowMuch = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #2277d8;
`;

export const HowMuchs = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #2277d8;
`;

export const AmountDiv = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: #2277d8;
`;

export const FooterBar = styled.div`
  width: 850px;
  height: 80px;
  background-color: #f6f6f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 4% 0% 8% 0%;
`;

export const ChargeButton = styled.div`
  width: 100px;
  height: 38.55px;
  border-radius: 8px;
  background-color: #2277d8;
  color: white;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0% 2% 0% 2%;
  cursor: pointer;
`;

export const FooterAmountWon = styled.div`
  font-size: 16px;
  color: #4f4f4f;
`;

export const FooterFlex = styled.div`
  display: flex;
  margin-left: 46%;
  padding-right: 3%;
  align-items: center;
`;

export const ChargeAmount = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: #484848;
  margin-left: 10%;
`;

export const AmountFlex = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const AmountFlexs = styled.div`
  display: flex;
  align-items: center;
  margin-left: 50.5%;
  width: 90px;
`;
