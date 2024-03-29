import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 3% 0;
  padding: 2%;
`;

export const WrapHambuger = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MainTitle = styled.div`
  font-size: 1.125rem;
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
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px #f2f2f2;
  cursor: pointer;
`;

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 1.125rem;
  padding-bottom: 5px;
  font-weight: 800;
`;

export const Date = styled.div`
  font-size: 0.875rem;
  color: #cccccc;
`;

export const Answer = styled.div`
  font-size: 1.125rem;
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
  cursor: pointer;
`;
