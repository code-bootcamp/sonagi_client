import styled from "@emotion/styled";
import { Rate } from "antd";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  justify-content: center;
`;

export const WrapStar = styled.div`
  display: flex;
  align-items: center;
`;

export const Rates = styled(Rate)`
  color: #2277d8;
  font-size: 3rem;
`;

export const CommentIcon = styled.img`
  margin-top: 3px;
  width: 24px;
  height: 24px;
`;

export const CommentTitle = styled.div`
  font-size: 1.25rem;
  margin-left: 10px;
  color: #70797e;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const Star = styled.div`
  font-size: 2rem;
  color: #2277d8;
  margin-left: 10px;
  font-weight: 500;
`;

export const WrapContents = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
`;

export const ContentsInput = styled.textarea`
  width: 100%;
  height: 170px;
  padding-left: 20px;
  font-size: 1rem;
  border: 3px solid #d1d5d9;
  border-radius: 5px;
  padding: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 1rem;
  }

  @media ${breakPoints.mobile} {
    font-size: 0.95rem;
  }
`;

export const Wraplength = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid black;
  height: 50px;
`;

export const Length = styled.div`
  width: 90%;
  color: #bdbdbd;
  display: flex;
  align-items: center;
  padding-left: 20px;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const CommentButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 70px;
  border-radius: 5px;
  background-color: #2277d8;
  color: white;
  cursor: pointer;
  align-self: flex-end;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
    width: 20%;
  }
`;
