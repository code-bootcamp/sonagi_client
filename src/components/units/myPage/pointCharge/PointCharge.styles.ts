import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input``;

export const MyPoint = styled.div`
  font-size: 1.125;
`;

export const MySonagiPoint = styled.div`
  font-size: 1.125;
`;
export const PointAmount = styled.div`
  font-size: 1.5rem;
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
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media ${breakPoints.tablet} {
    font-size: 0.813rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.81rem;
  }
`;

export const TopFlex = styled.div`
  display: flex;
  align-items: center;
  margin: 3% 0% 3% 0%;
`;

export const TableTop = styled.div`
  font-size: 1.375rem;
  width: 42%;
  color: #484848;
  margin: 2% 52% 2% 0%;
  font-weight: 700;
  @media ${breakPoints.tablet} {
    /* display: none; */
    /* width: 70%; */
  }
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const TitleAmount = styled.div`
  font-size: 1.5rem;
  color: #2277d8;
`;

export const AmountWon = styled.div`
  font-size: 1.5rem;
  color: #4f4f4f;
`;

export const TableBorder = styled.div`
  /* width: 850px; */
  width: 100%;
  height: 510px;
  border-radius: 8px;
  border: 1px solid #bdbdbd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.375rem;
  font-weight: 800;
  color: #484848;
`;

export const InnerTable = styled.div`
  /* width: 725px; */
  width: 600px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  margin-bottom: 2%;
  :hover {
    background-color: #dcf0ff;
    border: 1px solid #2277d8;
  }
  background-color: ${(props: any) =>
    props.el === props.value ? "#DCF0FF" : "default"};
  border: ${(props: any) =>
    props.el === props.value ? "1px solid #2277d8" : "default"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 3%;
  @media ${breakPoints.tablet} {
    /* display: none; */
    width: 70%;
  }
  @media ${breakPoints.mobile} {
    /* display: none; */
    width: 70%;
  }
`;

export const Div = styled.div`
  width: 35%;
`;

export const ButtonDiv = styled.div`
  width: 35%;
  @media ${breakPoints.tablet} {
    font-size: 30%;
  }
`;

export const HowMuch = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2277d8;
  @media ${breakPoints.tablet} {
    font-size: 0.938rem;
  }
`;

export const HowMuchs = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2277d8;
  @media ${breakPoints.tablet} {
    font-size: 0.938rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.813rem;
  }
`;

export const AmountDiv = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  color: #2277d8;
`;

export const FooterBar = styled.div`
  /* width: 850px; */
  width: 100%;
  height: 80px;
  background-color: #f6f6f6;
  border-radius: 8px;
  display: flex;
  align-items: center;
  margin: 4% 0% 8% 0%;
`;

export const ChargeButton = styled.div`
  /* width: 100px; */
  height: 38.55px;
  width: 100px;
  border-radius: 8px;
  background-color: #2277d8;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0% 2% 0% 2%;
  cursor: pointer;
  @media ${breakPoints.tablet} {
    font-size: 0.938rem;
    width: 90px;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.938rem;
    width: 73px;
  }
`;

export const FooterAmountWon = styled.div`
  font-size: 1rem;
  color: #4f4f4f;
  @media ${breakPoints.tablet} {
    font-size: 0.938rem;
  }
`;

export const FooterFlex = styled.div`
  display: flex;
  margin-left: 54%;
  padding-right: 3%;
  align-items: center;
  width: 30%;
`;

export const ChargeAmount = styled.div`
  font-size: 1.375rem;
  width: 100px;
  font-weight: 500;
  color: #484848;
  margin-left: 6%;
  @media ${breakPoints.tablet} {
    /* width: 100%; */
    font-size: 0.938rem;
    /* width: 20%; */
  }
  @media ${breakPoints.mobile} {
    /* width: 30%; */
    font-size: 0.813rem;
  }
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
