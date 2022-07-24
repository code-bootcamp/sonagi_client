import styled from "@emotion/styled";

export const Wrapper = styled.div`
  /* width: 1000px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Require = styled.div`
  font-size: 1.125rem;
  color: red;
  margin: 0px 0px 5px 10px;
`;

export const MainTitle = styled.div`
  font-size: 1.125rem;
  padding-bottom: 25px;
`;

export const WrapperInquire = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  /* width: 830px; */
  width: 100%;
  height: 500;
  border: 1px solid #bdbdbd;
  border-radius: 8px;
`;

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
`;

export const Label = styled.div`
  font-size: 1.125rem;
  padding-bottom: 15px;
`;

export const LabelInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: #f6f6f6;
  border: none;
  border-radius: 8px;
  padding: 10px;
  &:focus {
    outline: none;
  }
`;

export const Error = styled.div`
  font-size: 0.8rem;
`;

export const ContentsInput = styled.textarea`
  width: 100%;
  height: 200px;
  background-color: #f6f6f6;
  border: none;
  border-radius: 8px;
  resize: none;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

export const WrapButton = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  border: none;
`;
