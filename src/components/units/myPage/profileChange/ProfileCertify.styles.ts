import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 2%;
`;

export const MainTitle = styled.div`
  font-size: 1.125rem;
  margin: 30px 30px 50px 0px;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    margin-left: 30px;
  }
`;

export const WrapperPassword = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const WrapTitle = styled.div`
  width: 60%;
  height: 300px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  border-radius: 10px;
  margin-bottom: 20px;

  @media ${breakPoints.tablet} {
    width: 80%;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  /* font-weight: 600; */
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const LabelInput = styled.input`
  width: 280px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #f6f6f6;
  padding: 20px;
  &:focus {
    outline: none;
  }
  @media ${breakPoints.mobile} {
    width: 230px;
    height: 50px;
  }
`;

export const WrapInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.div`
  margin-left: 20px;
  width: 100px;
  height: 50px;
  background-color: #2277d8;
  color: white;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 70px;
    height: 50px;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

export const Div = styled.div``;
