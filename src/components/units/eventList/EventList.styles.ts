import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 30px 10px;
`;

export const RowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const EventTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.div`
  font-size: 1.875rem;
  font-weight: 700;
  color: #4d4d4d;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
    margin-top: 15px;
  }
`;

export const Subtitle = styled.div`
  font-size: 1.125em;
  color: #828282;
  padding-top: 20px;

  @media ${breakPoints.mobile} {
    font-size: 1em;
  }
`;

export const EventIcon = styled.img`
  width: 188px;
  height: 201px;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 60px;
`;

export const ListTitle = styled.div`
  padding-bottom: 5px;
  font-size: 1.5em;
  font-weight: 700;

  @media ${breakPoints.tablet} {
    font-size: 1.25em;
    margin-right: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 1em;
    margin-right: 25px;
  }
`;

export const ListDate = styled.div`
  font-size: 20px;
  font-weight: 300;
  padding-bottom: 10px;
  color: #7e7e7e;
`;

export const ListImgDiv = styled.div`
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  border-radius: 10px;
  border: none;
`;

export const ListImg = styled.img`
  width: 100%;
  border-radius: 10px;
`;
