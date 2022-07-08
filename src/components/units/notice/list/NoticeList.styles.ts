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
  justify-content: right;

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
export const NoticeTitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MTitle = styled.div`
  font-size: 1.575rem;
  font-weight: 700;
  color: #484848;
  padding-bottom: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const Title = styled.label`
  font-size: 1.875rem;
  font-weight: 700;
  color: #484848;
  margin-top: 20px;
`;
export const Subtitle = styled.div`
  font-size: 1.125rem;
  color: #828282;
  padding-top: 50px;
`;
export const NoticeIcon = styled.img`
  width: 188px;
  height: 202px;
`;

export const Total = styled.span`
  font-size: 1rem;
  color: #808080;
`;
export const NoticeWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  border: 1px solid #bdbdbd;
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  border-radius: 10px;
  padding: 27px 43px;
  margin-bottom: 20px;
  justify-content: sp;
`;
export const NoticeImg = styled.img`
  height: 150px;
  background-color: #eee;

  @media ${breakPoints.mobile} {
    height: 100px;
  }
`;
export const TextWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 35px;
`;
export const TextRowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${breakPoints.mobile} {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const RowWrap2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const NoticeName = styled.label`
  font-size: 1.5rem;
  font-weight: 700;
  color: #484848;

  @media ${breakPoints.mobile} {
    font-size: 1rem;
    padding-top: 6px;
  }
`;
export const NoticeTag = styled.div`
  background-color: #ddf0ff;
  width: 40px;
  height: 18px;
  color: #2277d8;
  text-align: center;
  font-size: 0.688rem;
`;
export const CreatAt = styled.span`
  font-size: 0.75rem;
  color: #808080;

  @media ${breakPoints.mobile} {
    font-size: 0.5rem;
  }
`;
export const Ago = styled.span`
  font-size: 1.25rem;
  color: #828282;

  @media ${breakPoints.mobile} {
    display: none;
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
  /* border: 1px solid #bdbdbd; */
  background-color: #2277d8;
  color: #fff;
`;

export const Noticeicon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
export const WriteBtn = styled.div``;

export const RowWrap3 = styled.div`
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
`;
export const PageNum = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.5rem;
`;

export const Page = styled.div`
  color: #808080;
  padding: 0px 10px;
`;
