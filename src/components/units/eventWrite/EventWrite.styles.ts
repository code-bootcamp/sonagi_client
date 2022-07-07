import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
`;

export const MainTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #484848;
  padding-bottom: 25px;
  padding-top: 25px;
`;

export const SubTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #484848;
  padding-bottom: 10px;
`;

export const InputTitle = styled.input`
  padding: 10px 0px;
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

export const InputContents = styled.input`
  height: 350px;
  padding: 10px;
  background-color: #f6f6f6;
  border: none;
  &::placeholder {
    color: #cccccc;
  }
  &:focus {
    outline: none;
  }
  margin-bottom: 20px;
`;

export const UploadBox = styled.div`
  margin-top: 20px;
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

export const Button = styled.div`
  width: 160px;
  height: 60px;
  padding: 14px 0px;
  margin: 0px 15px;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #ffffff;
  background-color: #2277d8;
  cursor: pointer;
`;
