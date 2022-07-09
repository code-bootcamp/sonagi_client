import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Background = styled.div`
  background-image: url(https://assets.website-files.com/626e03550d499953fac7baa7/6278b37c71aa3c9d1c56b3a9_Oval.png);
  background-size: 100%;
  /* background-position: right 40% center; */
  /* background-position: right 300%; */
  background-color: rgba(255, 255, 255, 0.2);
  opacity: 90%;
  background-blend-mode: normal;
`;

export const Wrapper = styled.div`
  /* width: 1000px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 200px;
`;

export const MainTitle = styled.div`
  font-size: 1.125rem;
  margin: 30px 30px 300px 0px;
`;

export const WrapperPassword = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  @media ${breakPoints.mobile} {
    margin-bottom: 120px;
  }
`;

export const Label = styled.div`
  font-size: 1.438rem;
  padding-bottom: 15px;
  /* font-weight: 600; */
  @media ${breakPoints.mobile} {
    font-size: 2.5rem;
    margin-left: 14px;
  }
`;

export const LabelInput = styled.input`
  width: 280px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #f6f6f6;
`;

export const WrapInput = styled.div`
  display: flex;
  margin-left: 20px;
`;

export const Button = styled.div`
  margin-left: 20px;
  width: 100px;
  height: 50px;
  background-color: #bee3ff;
  color: #474747;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelWrapper = styled.div`
  display: flex;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;
