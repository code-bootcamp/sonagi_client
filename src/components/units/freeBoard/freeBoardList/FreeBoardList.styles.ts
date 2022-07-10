import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media ${breakPoints.mobile} {
    padding: 0 1.25rem;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const MainTitle = styled.div`
  font-size: 1.875em;
  font-weight: 700;
  color: #484848;
  margin-top: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const WrapButton = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: flex-end;

  @media ${breakPoints.mobile} {
    justify-content: center;
  }
`;

export const ClickButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #2277d8;
  font-weight: 500;
  width: 100px;
  height: 40px;
`;

export const WrapperBoard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0 15px 0;
  border-bottom: 1px solid #bdbdbd;
`;

export const Title = styled.div`
  font-size: 1.563rem;
  color: #484848;

  @media ${breakPoints.mobile} {
    font-size: 1.3rem;
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5px;
`;

export const Writer = styled.div`
  font-size: 1.25rem;
  color: #2277d8;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const Date = styled.div`
  font-size: 1.2rem;
  color: #7e7e7e;
  margin-left: 10px;

  @media ${breakPoints.mobile} {
    font-size: 1.1rem;
  }
`;
