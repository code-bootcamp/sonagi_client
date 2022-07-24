import styled from "@emotion/styled";

export const WrapCheck = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;
export const CheckWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1px 0px;
`;

export const CheckBox = styled.input`
  width: 11px;
  border: none;
`;

export const CheckTitle = styled.div`
  width: 90%;
  font-size: 12px;
  font-weight: 300;
  text-align: left;
  letter-spacing: 0.232836px;
  color: #484848;
`;

export const Arrow = styled.img`
  margin: 3px 0px 0px 10px;
  width: 2%;
  height: 10px;
  cursor: pointer;
`;

export const BoxWrapper = styled.div`
  width: 35vw;
  height: 100vh;
  padding: 3%;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 50;
  background-color: #ffffff;

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
    padding: 80px 30px 30px 30px;
  }

  @media (max-width: 767px) {
    max-width: 767px;
    width: 100vw;
    padding: 50px 30px 30px 30px;
  }
`;

export const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  padding-bottom: 20px;
  color: #2277d8;
  font-weight: 500;
`;

export const Box = styled.div`
  border: 1px solid;
  width: 30vw;
  height: 70vh;
  padding: 10px;
  border: 1px solid #f4f4f4;
  background-color: #ffffff;
  border-radius: 10px;
  color: #4f4f4f;
  overflow: scroll;
  font-size: 0.9rem;
`;

export const Button = styled.button`
  width: 120px;
  height: 34px;
  margin-top: 30px;
  border: 1px solid #2277d8;
  color: #2277d8;
  font-size: 1rem;
  text-align: center;
  background-color: #ffffff;
  letter-spacing: 0.232836px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;
