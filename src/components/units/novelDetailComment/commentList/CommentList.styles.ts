import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
  }
`;

export const WrapBestIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  height: 100px;
  border-bottom: 1.5px solid #d9d9d9;
`;

export const ProfileIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const WrapCommentInfo = styled.div`
  display: flex;
`;

export const Comment = styled.div`
  color: #484848;
  font-size: 1.1rem;

  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
  }
`;

export const WrapUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Star = styled(Rate)`
  font-size: 15px;
  color: #2277d8;
`;

export const WrapComment = styled.div`
  padding-left: 30px;
`;

export const Name = styled.div`
  /* color: #808080; */
  padding-top: 3px;
  font-weight: 500;
  font-size: 1.1rem;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const WrapDate = styled.div``;

export const Date = styled.div`
  color: #808080;
  font-size: 0.83rem;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
  }
`;

export const WrapUp = styled.div`
  width: 70px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #d9d9d9;
`;

export const UpIcon = styled.img`
  width: 17px;
  height: 17px;

  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 15px;
    height: 15px;
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

export const WrapIconUP = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const WrapIcon = styled.div`
  display: flex;
`;

export const EditIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  cursor: pointer;
  color: white;
  background-color: #5bafe5;
  border-radius: 4px;
  :hover {
    background-color: #2277d8;
  }

  @media ${breakPoints.mobile} {
    width: 60px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

export const DeleteIcon = styled.div`
  margin-left: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 35px;
  cursor: pointer;
  color: white;
  background-color: #5bafe5;
  border-radius: 4px;

  :hover {
    background-color: #2277d8;
  }

  @media ${breakPoints.mobile} {
    width: 60px;
    height: 30px;
    font-size: 0.8rem;
  }
`;

export const AnswerIcon = styled.img`
  width: 23px;
  height: 23px;
  margin-left: 20px;
`;

export const FooterWrapper = styled.div``;
