import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;

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
  border-bottom: 2px solid #d9d9d9;
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
  font-size: 1.25rem;

  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
  }
`;

export const WrapUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Star = styled(Rate)`
  font-size: 15px;
  color: #2277d8;
`;

export const WrapComment = styled.div`
  padding-left: 30px;
  align-self: center;
`;

export const Name = styled.div`
  /* color: #808080; */
  font-weight: 600;
  font-size: 1.2rem;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const WrapDate = styled.div``;

export const Date = styled.div`
  color: #808080;
  font-size: 1.063rem;

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
  justify-content: space-between;
  align-items: flex-end;
`;

export const WrapIcon = styled.div`
  display: flex;
  /* align-items: center; */
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
`;

export const FooterWrapper = styled.div`
  margin-left: 60px;
`;
