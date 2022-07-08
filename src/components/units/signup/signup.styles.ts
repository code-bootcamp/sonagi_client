import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);

  @media (min-width: 767px) and (max-width: 991px) {
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
  /* justify-content: space-between; */

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

export const PhoneImg = styled.img`
  width: 65vw;
  height: 100vh;
  object-fit: cover;

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const LogoImg = styled.img`
  margin-bottom: 20px;
`;

export const SubTitle = styled.div`
  margin-bottom: 2px;
  font-weight: 400;
  font-size: 16px;
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
  padding: 20px 0;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #cccccc;
  /* color: #cccccc; */
  &::placeholder {
    color: #cccccc;
  }
  &:focus {
    outline: none;
  }
`;

export const InputButton = styled.div`
  width: 100px;
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
  width: 80px;
  height: 34px;
  margin: 4px 0px 0px 14px;
  padding-top: 5px;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #2277d8;
  text-align: center;
`;

export const CheckWrapper = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1px 0px;
`;

export const CheckImg = styled.img`
  margin: 15px 3px 0px 0px;
  width: 8px;
  height: 8px;
`;

export const CheckBox = styled.input`
  width: 3%;
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
`;

export const SignUpButton = styled.div`
  width: 100%;
  height: 50px;
  margin: 20px 0px;
  padding-top: 13px;
  background-color: #bee3ff;
  text-align: center;
  color: #474747;
  font-weight: 400;
  font-size: 13px;
  cursor: pointer;
`;

export const Corp = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #cccccc;
`;
