import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  height: 400px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitleWrapper = styled.div`
  padding: 10px 0;
`;

export const PhoneWrapper = styled.div`
  width: 100%;
  padding: 50px 0px 0px 0px;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: -10px;
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

export const VideoWrapper = styled.div`
  width: 100%;
  height: 450px;
  padding: 100px 0px;
  position: relative;
  overflow: visible;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    flex-direction: column;
    height: 800px;
    position: static;
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }
`;

export const VideoDiv = styled.div`
  position: absolute;
  top: -18%;
  left: 12%;
  transform: translate(0%, -0%);
  box-shadow: 10px 10px 40px rgb(0 0 0 / 10%);

  @media (max-width: 960px) {
    position: static;
    top: 5%;
    left: 0;
    transform: none;
    width: 100%;
    display: flex;
    justify-content: center;
    box-shadow: none;
  }
`;

export const VideoTitle = styled.div`
  font-size: 2.5rem;
  font-weight: 400;
  padding-bottom: 10px;
`;

export const VideoContentWrap = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding-left: 60%;

  @media (max-width: 960px) {
    padding-left: 0;
    padding-top: 30px;
  }
`;

export const VideoContent = styled.div`
  font-size: 1.3rem;
  font-weight: 300;
`;
