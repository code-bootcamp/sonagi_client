import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media ${breakPoints.mobile} {
    padding: 0 20px;
    width: 110%;
  }
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 40px;
`;

export const CommentIcon = styled.img`
  margin-top: 3px;
  width: 24px;
  height: 24px;
`;

export const CommentTitle = styled.div`
  font-size: 1.25rem;
  color: #484848;
  margin-left: 10px;
  font-weight: bold;

  @media ${breakPoints.mobile} {
    font-size: 1.2rem;
  }
`;

export const WrapContents = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 161px; */
`;

export const ContentsInput = styled.input`
  width: 100%;
  height: 120px;
  padding-left: 20px;
  font-size: 1rem;
  border: 1px solid #bdbdbd;
  border-radius: 8px 8px 0px 0px;
  border-bottom: none;

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 0.95rem;
    color: #bdbdbd;
  }
  @media ${breakPoints.tablet} {
    &::placeholder {
      font-size: 0.85rem;
      color: #bdbdbd;
    }
  }

  @media ${breakPoints.mobile} {
    &::placeholder {
      width: 98%;
      font-size: 0.55rem;
      color: #bdbdbd;
      word-break: keep-all;
      white-space: normal;
    }
  }
`;

export const Wraplength = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #bdbdbd;
  height: 55px;
  border-radius: 0px 0px 8px 8px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  background-color: #2277d8;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
    width: 27%;
  }
`;
