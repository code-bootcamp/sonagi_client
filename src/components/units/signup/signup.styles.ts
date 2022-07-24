import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  @media (min-width: 767px) and (max-width: 1040px) {
    min-width: 767px;
    max-width: 991px;
    justify-content: center;
  }

  @media (max-width: 767px) {
    max-width: 767px;
    width: 100vw;
    justify-content: center;
  }
`;

export const LoginWrapper = styled.div`
  width: 35vw;
  height: 100vh;
  padding: 50px 80px 30px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* justify-content: space-between; */

  @media (min-width: 767px) and (max-width: 1040px) {
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

export const PhoneImg = styled.img`
  width: 65vw;
  height: 100vh;
  object-fit: cover;

  @media (max-width: 1040px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  margin-bottom: 20px;
`;
export const WrapSubTitle = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;
export const SubTitle = styled.div`
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 1vw;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #484848;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1% 0;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 5px;
  border: none;
  border-bottom: 1px solid #cccccc;
  &::placeholder {
    color: #cccccc;
  }
  &:focus {
    outline: none;
  }
`;

export const Error = styled.div`
  font-size: 10px;
  width: 100%;
`;

export const InputButton = styled.div`
  width: 120px;
  height: 34px;
  margin: 6px 0px 0px 10px;
  padding-top: 5px;
  background-color: #bee3ff;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #484848;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;

export const InputText = styled.div`
  width: 110px;
  height: 34px;
  margin: 4px 0px 0px 5px;
  padding-top: 5px;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #2277d8;
  text-align: center;
`;

export const InputCheckText = styled.div`
  width: 110px;
  height: 34px;
  margin: 4px 0px 0px 5px;
  padding-top: 5px;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #484848;
  text-align: center;
`;

export const CheckImg = styled.img`
  margin: 15px 5px 0px 0px;
  width: 8px;
  height: 8px;
`;

export const SignUpButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 0;
  margin: 20px 0px;
  background-color: #bee3ff;
  color: #474747;
  font-weight: 400;
  font-size: 13px;
  border: none;
  cursor: pointer;
`;

export const Corp = styled.div`
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #cccccc;
`;
