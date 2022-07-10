import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;
export const RowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const NoticeTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.label`
  font-size: 1.875em;
  font-weight: 700;
  color: #484848;
  margin-top: 20px;

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
    padding-top: 20px;
  }
`;
export const NoticeIcon = styled.img`
  width: 188px;
  height: 201px;

  @media ${breakPoints.mobile} {
    height: 150px;
  }
`;

export const NoticeListWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Total = styled.span`
  font-size: 1em;
  color: #808080;
  margin-bottom: 15px;

  @media ${breakPoints.mobile} {
    font-size: 0.95em;
  }
`;
export const NoticeWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  border-radius: 10px;
  margin-bottom: 20px;
  cursor: pointer;
`;
export const NoticeImg = styled.div`
  width: 20%;
  height: 135px;
  background-color: #eee;
  border-radius: 10px 0px 0px 10px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 25%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 35%;
  }
`;
export const TextWrap = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 35px;
  padding: 31px 0px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 75%;
    margin-left: 25px;
    padding: 25px 0px;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 65%;
    margin-left: 15px;
    padding: 10px 0px;
  }
`;
export const TextRowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RowWrap2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NoticeName = styled.label`
  font-size: 1.5em;
  font-weight: 700;
  color: #484848;
  margin-right: 40px;

  @media ${breakPoints.tablet} {
    font-size: 1.25em;
    margin-right: 30px;
  }

  @media ${breakPoints.mobile} {
    font-size: 1em;
    margin-right: 25px;
  }
`;
export const NoticeTag = styled.div`
  background-color: #ddf0ff;
  width: 40px;
  height: 18px;
  color: #2277d8;
  text-align: center;
  font-size: 0.75em;

  @media ${breakPoints.tablet} {
    width: 30px;
    font-size: 0.5em;
  }

  @media ${breakPoints.mobile} {
    width: 25px;
    font-size: 0.5em;
  }
`;
export const CreatAt = styled.span`
  font-size: 1em;
  color: #808080;
  font-weight: 300;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
  }
`;
export const Ago = styled.span`
  font-size: 1em;
  color: #828282;
  margin-right: 40px;

  @media ${breakPoints.mobile} {
    font-size: 0.8em;
    margin-right: 20px;
  }
`;

export const NoticeWrite = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 160px;
  height: 55px;
  padding: 17px;
  text-align: center;
  border: 1px solid #bdbdbd;
  background-color: #2277d8;
  color: #fff;
`;

export const Noticeicon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
export const RowWrap3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;

  @media ${breakPoints.mobile} {
    width: 40%;
    margin-left: auto;
  }
`;

export const RowWrap4 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 50px;
`;
export const Arrow = styled.img`
  width: 35px;
  height: 35px;
  margin: 0px 30px;

  @media ${breakPoints.mobile} {
    width: 30px;
    height: 30px;
  }
`;
export const PageNum = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5em;

  @media ${breakPoints.mobile} {
    font-size: 1.25em;
  }
`;

export const Page = styled.div`
  color: #808080;
  padding: 0px 10px;
`;
