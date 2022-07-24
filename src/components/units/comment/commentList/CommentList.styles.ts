import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 97%;
  margin-left: 16px;
  margin-bottom: 13px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f6f6f6;
  border-radius: 8px;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
    margin-top: 15px;
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
`;

export const ProfileIcon = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 2px;
  @media ${breakPoints.mobile} {
    width: 50px;
    height: 50px;
    position: relative;
    right: 22px;
  }
`;

export const WrapCommentInfo = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  @media ${breakPoints.mobile} {
    margin-top: 5px;
    position: relative;
    right: 42px;
  }
`;

export const Comment = styled.div`
  color: #484848;
  font-size: 1.25rem;

  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
  }
`;

export const WrapUserInfo = styled.div`
  padding-top: 5px;
  display: flex;
  align-items: center;
`;

export const Name = styled.div`
  color: #2277d8;
  font-weight: 800;
  font-size: 1.063rem;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
  }
`;

export const Date = styled.div`
  color: #808080;
  font-size: 1.063rem;
  margin-left: 10px;

  @media ${breakPoints.mobile} {
    font-size: 0.75rem;
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
  }
`;

export const EditIcon = styled.img`
  width: 23px;
  height: 23px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const DeleteIcon = styled.img`
  padding-top: 2px;
  margin-left: 20px;
  width: 21px;
  height: 22px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const AnswerIcon = styled.img`
  width: 23px;
  height: 23px;
  margin-left: 20px;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 16px;
    height: 16px;
  }
`;

export const FooterWrapper = styled.div`
  margin-left: 60px;
`;
