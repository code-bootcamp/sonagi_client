import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const Wrap = styled.div`
  border: 1px solid #bdbdbd;
  border-radius: 8px;
`;

export const MainTitle = styled.div`
  font-size: 1.125rem;
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  margin: 15px 0px 15px 0px;
  color: #cccccc;
`;

export const WrapperModify = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  margin-left: 40px;
`;

export const Label = styled.div`
  font-size: 1.125rem;
  padding-bottom: 15px;
`;

export const WrapNumber = styled.div`
  display: flex;
  align-items: center;
`;

export const NumberInput = styled.input`
  width: 70%;
  height: 30px;
  margin-right: 20px;
  background-color: #f6f6f6;
  border: none;
  border-radius: 8px;
`;

export const NumberButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bee3ff;
  width: 18%;
  height: 40px;
  border-radius: 8px;
  font-size: 1rem;
  @media ${breakPoints.tablet} {
    font-size: 0.625rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.55rem;
  }
`;

export const LabelInput = styled.input`
  width: 90%;
  height: 30px;
  background-color: #f6f6f6;
  border: none;
  border-radius: 8px;
`;

export const WrapButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  font-size: 1rem;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  @media ${breakPoints.tablet} {
    font-size: 0.813rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.813rem;
  }
`;
