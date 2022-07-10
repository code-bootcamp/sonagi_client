import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 96%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 92%;
    margin: 0 3%;
  }
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const MainTitle = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  margin-top: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const TitleLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: #bdbdbd;
  margin: 0px 50px;
`;

export const WriterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 30px;
  border-bottom: 1px solid #bdbdbd;
`;

export const Writer = styled.div`
  font-size: 1.125em;
  margin-right: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  padding: 64px 0px 24px;

  @media ${breakPoints.mobile} {
    font-size: 1.25em;
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
  font-size: 1rem;
  text-align: center;
  color: #808080;
  margin-right: 10px;

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
export const Contents = styled.div`
  margin: 30px 0px 80px 0px;
  height: 600px;
  background-color: #eee;
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
`;
