import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

export const MainTitle = styled.div`
  font-size: 18px;
  padding-bottom: 25px;
`;

export const WrapperList = styled.div`
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #bdbdbd;
  height: 100px;
  align-items: center;
  margin-bottom: 25px;
  border-radius: 8px; ;
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 18px;
  padding-bottom: 5px;
  font-weight: 800;
`;

export const Date = styled.div`
  font-size: 14px;
  color: #cccccc;
`;

export const Answer = styled.div`
  font-size: 18px;
  color: #2277d8;
`;

export const WrapButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.div`
  width: 100px;
  height: 40px;
  background-color: #2277d8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
