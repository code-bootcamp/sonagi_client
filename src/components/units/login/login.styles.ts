import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
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
  padding: 120px 80px 30px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
  }

  @media (max-width: 767px) {
    max-width: 767px;
    width: 100vw;
    padding: 120px 30px 30px 30px;
  }
`;

export const BookImg = styled.img`
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
  margin-bottom: 15px;
  cursor: pointer;
`;

export const SubTitle = styled.div`
  margin-bottom: 50px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #484848;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 1px solid #cccccc;
  color: #cccccc;
  &::placeholder {
    color: #cccccc;
  }
  &:focus {
    outline: none;
  }
`;

export const LoginButton = styled.div`
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

export const SubBox = styled.div`
  width: 100%;
  margin-bottom: 25px;
  padding: 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubButton = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #484848;
  cursor: pointer;
`;
export const CheckImg = styled.img`
  width: 18px;
  height: 17px;
  margin-top: 1px;
`;

export const Stick = styled.div`
  padding-top: 1px;
  font-size: 8px;
  color: #cccccc;
`;

export const SignUpBox = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const SignUpButton = styled.div`
  margin-left: 10px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #2277d8;
  cursor: pointer;
`;

export const OrBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Line = styled.div`
  width: 40%;
  margin-bottom: 7px;
  border-bottom: 1px solid #cccccc;
`;

export const Or = styled.div`
  width: 80px;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  color: #cccccc;
`;

export const LoginLogoImg = styled.img`
  width: 32px;
  height: 32px;
  margin: 16px;
  cursor: pointer;
`;

export const Corp = styled.div`
  margin-top: 100px;
  font-weight: 400;
  font-size: 10px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.232836px;
  color: #cccccc;
`;
