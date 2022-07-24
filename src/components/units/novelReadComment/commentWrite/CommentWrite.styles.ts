import styled from "@emotion/styled";

import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
  }
`;

export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f1f4f5;
  height: 8%;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  justify-content: center;
`;

export const WrapContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 0 auto;
`;

export const ContentsInput = styled.textarea`
  height: 250px;
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

export const CommentButton = styled.button`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 70px;
  border-radius: 5px;
  background-color: #2277d8;
  color: white;
  cursor: pointer;
  align-self: flex-end;
  border: none;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
    width: 20%;
  }
`;
