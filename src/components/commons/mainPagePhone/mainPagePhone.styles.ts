import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const PhoneWrapper = styled.div`
  width: 100%;
  padding: 50px 0px 0px 0px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -10px;
`;

export const SubTitleWrapper = styled.div`
  padding: 10px 0;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 45px;
  text-align: center;
  color: #484848;
`;

export const Subtitle = styled.div`
  font-weight: 300;
  font-size: 25px;
  text-align: center;
  color: #808080;
`;

export const PhoneImg = styled.img`
  width: 400px;
  height: 407px;
  margin-top: 30px;

  @media ${breakPoints.mobile} {
    width: 380px;
  }
`;

export const PhoneSubImg = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  margin-top: 480px;
  margin-left: -390px;

  &:hover {
    width: 140px;
    height: 140px;
    transition: 0.5s;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PhoneSubImg2 = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  margin-top: 480px;
  margin-left: 390px;

  &:hover {
    width: 140px;
    height: 140px;
    transition: 0.5s;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PhoneSubImg3 = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  margin-top: 300px;
  margin-left: -320px;

  &:hover {
    width: 140px;
    height: 140px;
    transition: 0.5s;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const PhoneSubImg4 = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  margin-top: 300px;
  margin-left: 320px;

  &:hover {
    width: 140px;
    height: 140px;
    transition: 0.5s;
  }

  @media (min-width: 767px) and (max-width: 991px) {
    display: none;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
