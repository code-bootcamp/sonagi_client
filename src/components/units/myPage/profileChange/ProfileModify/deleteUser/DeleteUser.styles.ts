import styled from "@emotion/styled";
import { breakPoints } from "../../../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 60%;
  height: ${(props: any) => (props.setCheck ? "570px" : "500px")};

  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  padding: 3%;
  @media ${breakPoints.tablet} {
    width: 70%;
  }
  @media ${breakPoints.mobile} {
    width: 90%;
  }
`;

export const WrapperModify = styled.div`
  padding-left: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.div`
  font-size: 1.125rem;
  font-weight: 600;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const Title = styled.div`
  font-size: 1.05rem;
  font-weight: 500;
  padding: 15px 0px 10px;
  color: #2277d8;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const SubTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 5px;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const Contents = styled.div`
  font-size: 0.9rem;
  padding: 2px 0 1px 2px;

  @media ${breakPoints.tablet} {
    font-size: 0.9rem;
  }
  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const Box = styled.div`
  display: flex;
`;

export const BottomWrapper = styled.div`
  padding-top: 30px;
  display: flex;
  justify-content: center;
`;

export const Check = styled.div`
  font-size: 1rem;
  padding-bottom: 2px;
  padding-left: 2px;
`;

export const Button = styled.button`
  width: 30%;
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;
