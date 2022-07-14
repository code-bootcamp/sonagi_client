import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

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
  width: 100%;
  padding: 2%;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const WrapTitle = styled.div`
  width: 70%;
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

  @media ${breakPoints.mobile} {
    margin-bottom: 120px;
  }
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.438rem;
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

export const Div = styled.div`
  width: 200px;
  height: 50px;
  margin-right: 200px;
`;
