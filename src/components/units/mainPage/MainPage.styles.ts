import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 991px) {
    width: 1200px;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;
  height: 400px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
  }
`;

export const PhoneWrapper = styled.div`
  width: 100%;
  padding: 50px 0px 0px 0px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -10px;

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 45px;
  text-align: center;
  color: #484848;
  margin-bottom: 10px;
`;

export const Subtitle = styled.div`
  font-weight: 400;
  font-size: 25px;
  text-align: center;
  color: #808080;
  margin-top: 10px;
`;

export const PhoneImg = styled.img`
  width: 400px;
  height: 407px;
  margin-top: 30px;
`;

export const PhoneSubImg = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  margin-top: 480px;
  margin-left: -390px;

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }
`;

export const PhoneSubImg2 = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  margin-top: 480px;
  margin-left: 390px;

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }
`;

export const PhoneSubImg3 = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  margin-top: 300px;
  margin-left: -320px;

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }
`;

export const PhoneSubImg4 = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  margin-top: 300px;
  margin-left: 320px;

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }
`;
