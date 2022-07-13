import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/media";

export const Background = styled.div`
  background-image: linear-gradient(
      rgba(254, 254, 254, 0.45),
      rgba(254, 254, 254, 0.45)
    ),
    url(https://assets.website-files.com/626e03550d499953fac7baa7/6278b37c71aa3c9d1c56b3a9_Oval.png);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  /* width: 100%; */
  /* /* width: 800px; */
  width: 100%;
  /* background-position: right 40% center; */
  /* background-position: right 300%; */
  background-color: rgba(255, 255, 255, 0.2);
  background-blend-mode: lighten;
  @media ${breakPoints.mobile} {
    background-size: cover;
  }
`;

export const Wrapper = styled.div`
  /* width: 1000px; */
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${breakPoints.mobile} {
    /* padding: 30px; */
  }
`;

export const MainTitle = styled.div`
  font-size: 1.125rem;
  margin: 30px 30px 300px 0px;
  @media ${breakPoints.mobile} {
    font-size: 1rem;
    margin-left: 30px;
  }
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
  margin-right: 10px;
  /* font-weight: 600; */
  @media ${breakPoints.mobile} {
    font-size: 2.125rem;
    margin-left: 14px;
  }
`;

export const LabelInput = styled.input`
  width: 280px;
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #f6f6f6;
  @media ${breakPoints.mobile} {
    width: 230px;
    height: 50px;
  }
`;

export const WrapInput = styled.div`
  display: flex;
  margin-left: 20px;
  width: 100%;
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
  @media ${breakPoints.mobile} {
    width: 70px;
    height: 50px;
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: 26px;
  @media ${breakPoints.mobile} {
    flex-direction: column;
    margin-bottom: 30px;
  }
`;

export const Div = styled.div`
  width: 200px;
  height: 50px;
  margin-right: 200px;
`;
