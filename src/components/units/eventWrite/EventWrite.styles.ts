import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    width: 96%;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    width: 92%;
    margin: 0 3%;
  }
`;

export const RowWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

export const MainTitle = styled.div`
  font-size: 1.875em;
  font-weight: 700;
  margin: 20px 0px;

  @media ${breakPoints.mobile} {
    font-size: 1.5em;
  }
`;

export const TitleLine = styled.div`
  width: 1px;
  height: 20px;
  background-color: #bdbdbd;
  margin: 0px 50px;
`;

export const SubTitle = styled.div`
  font-size: 1.5em;
  font-weight: 500;
  padding: 30px 0px 15px 0px;

  @media ${breakPoints.mobile} {
    font-size: 1.125em;
  }
`;

export const InputTitle = styled.input`
  padding: 10px 20px;
  border: none;
  border-bottom: 1px solid #484848;
  &::placeholder {
    color: #cccccc;
  }
  &:focus {
    outline: none;
  }
  margin-bottom: 20px;
`;

export const InputContents = styled.textarea`
  width: 100%;
  background-color: #eee;
  height: 70vh;
  padding: 20px;
  border: none;
  border-radius: 20px;

  &::placeholder {
    color: #cccccc;
  }
  &:focus {
    outline: none;
  }

  @media ${breakPoints.tablet} {
    transition-duration: 1s;
    padding: 50px;
  }

  @media ${breakPoints.mobile} {
    transition-duration: 1s;
    padding: 30px;
    font-size: 0.875em;
  }
`;

export const UploadBox = styled.div`
  margin-top: 10px;
  margin-bottom: 100px;
  display: flex;
`;

export const UploadButton = styled.button`
  width: 80px;
  height: 80px;
  margin-right: 20px;
  background-color: #d9d9d9;
  border: 0;
  font-family: "Noto Sans CJK KR";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 100px;
`;
