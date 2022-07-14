import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
`;

export const Wrap = styled.div`
  width: 100%;
  height: 500px;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.div`
  font-size: 1.125rem;
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  margin: 15px 0px 15px 0px;
  color: #cccccc;
`;

export const BoxWrapper = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const WrapperModify = styled.div`
  padding: 5% 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const Label = styled.div`
  font-size: 1.125rem;
  padding-bottom: 15px;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
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

export const ChangeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #bee3ff;
  width: 50%;
  height: 40px;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
`;

export const LabelInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #f6f6f6;
  border: none;
  border-radius: 8px;
  padding-left: 10px;
  &:focus {
    outline: none;
  }
`;

export const Error = styled.div`
  font-size: 10px;
  padding-top: 2px;
`;

export const WrapButton = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 40%;
  height: 40px;
  font-size: 1rem;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;

  @media ${breakPoints.tablet} {
    width: 60%;
    font-size: 0.813rem;
  }
  @media ${breakPoints.mobile} {
    width: 70%;
    font-size: 0.713rem;
  }
`;
