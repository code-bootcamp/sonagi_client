import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0px;
  margin: 0 2%;
`;

export const EventDetailWrap = styled.div`
  width: 100%;

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
  font-size: 1.875em;
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

export const SubTitle = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  padding: 64px 0px 24px;

  @media ${breakPoints.mobile} {
    font-size: 1.25em;
  }
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

export const CreatedDate = styled.div`
  font-size: 0.813em;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  color: #808080;
`;

export const DetailBox = styled.div`
  margin: 30px 0px 80px 0px;
  height: 600px;
  background-color: #eee;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`;
