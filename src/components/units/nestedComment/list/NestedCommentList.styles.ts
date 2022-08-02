import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  padding: 20px;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
    width: 110%;
    height: 100px;
    /* border: 1px solid black; */
  }
`;

export const Arrow = styled.div`
  @media ${breakPoints.mobile} {
    position: absolute;
    left: 70px;
  }
`;

export const WrapBestIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  margin-left: 30px;
`;

export const BestComment = styled.div`
  width: 60px;
  height: 24px;
  background-color: #ed6c5e;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-left: 5px;

  @media ${breakPoints.mobile} {
    width: 40px;
    height: 17px;
    font-size: 0.7rem;
    margin-left: 13px;
  }
`;

export const WrapInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const ProfileIcon = styled.img`
  width: 60px;
  height: 60px;
  @media ${breakPoints.mobile} {
    width: 50px;
    height: 50px;
    position: relative;
    left: -26px;
    top: -8px;
    /* margin-top: 10px; */
  }
`;

export const WrapCommentInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  /* background-color: blue; */
  @media ${breakPoints.mobile} {
    width: 80%;
  }
`;

export const Comment = styled.div`
  color: #484848;
  font-size: 1.25rem;

  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
    position: relative;
    top: 4px;
    right: 38px;
    width: 137px;
    word-wrap: break-word;
  }
`;

export const WrapUserInfo = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
  }
`;

export const Name = styled.div`
  color: #2277d8;
  font-weight: 800;
  font-size: 1.063rem;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    width: 100%;
    position: relative;
    right: 93px;
    top: 13px;
    bottom: 5px;
  }
`;

export const Date = styled.div`
  color: #808080;
  font-size: 1.063rem;
  margin-left: 10px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
    width: 250px;
    position: relative;
    right: 150px;
    top: 13px;
    /* position: absolute;
    top: 1118px;
    right: 106px; */
  }
`;

export const UpIcon = styled.img`
  width: 17px;
  height: 17px;
  margin-left: 10px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 15px;
    height: 15px;
    display: none;
  }
`;

export const UpCount = styled.div`
  color: #808080;
  font-size: 1.063rem;
  margin-left: 5px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
  }
`;

export const WrapIcon = styled.div`
  display: flex;
  align-items: center;
  @media ${breakPoints.mobile} {
    /* width: 10%; */
    position: relative;
    right: 103px;
  }
`;

export const EditIcon = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 18px;
    height: 18px;
  }
`;

export const DeleteIcon = styled.img`
  padding-top: 2px;
  margin-left: 20px;
  width: 21px;
  height: 22px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 18px;
    height: 18px;
  }
`;

export const AnswerIcon = styled.img`
  width: 23px;
  height: 23px;
  margin-left: 20px;
  cursor: pointer;
`;

export const FooterWrapper = styled.div`
  margin-left: 60px;
`;
