import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-bottom: 120px;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
`;

export const MainTitle = styled.div`
  font-size: 1.875rem;
  font-weight: bold;
  padding: 25px 0;

  @media ${breakPoints.mobile} {
    font-size: 1.5rem;
  }
`;

export const WrapTitleInfo = styled.div`
  display: flex;
  padding: 25px 0;
  border-bottom: 1px solid #dbdbdb;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  color: #484848;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const WrapUserInfo = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
`;
export const UserLabel = styled.div`
  font-size: 1.25rem;
  color: #484848;

  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
  }
`;
export const Date = styled.div`
  font-size: 1.25rem;
  color: #808080;
  margin-left: 12px;

  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
  }
`;
export const ReportIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 12px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 15px;
    height: 15px;
  }
`;
export const Contents = styled.input`
  margin: 40px 0;
  width: 100%;
  height: 350px;
  margin-bottom: 50px;
`;
export const Button = styled.div`
  width: 160px;
  height: 60px;
  padding: 25px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;

  @media ${breakPoints.mobile} {
    justify-content: center;
  }
`;
