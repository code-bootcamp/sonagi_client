import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import { INovelReadStyles } from "./NovelRead.types";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
    background-color: green;
  }

  @media (max-width: 767px) {
    max-width: 767px;
    background-color: yellow;
  }
`;

export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f1f4f5;
  height: 8%;
  display: ${(props: INovelReadStyles) =>
    props.setDisplay ? "default" : "none"};
`;

export const BodyWrapper = styled.pre`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  font-family: RIDIbatang, serif;
  /* background-color: #ffd2dd; */
  font-size: ${(props: INovelReadStyles) => props.fontsize}rem;
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
  margin: 0;
  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
    width: 100%;
    background-color: green;
    padding: 30px;
  }

  @media (max-width: 767px) {
    max-width: 767px;
    width: 100%;
    background-color: yellow;
    padding: 30px;
  }
`;

export const FooterWrapper = styled.div`
  width: 100%;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f1f4f5;
  display: ${(props: INovelReadStyles) =>
    props.setDisplay ? "default" : "none"};

  @media ${breakPoints.tablet} {
    padding: 20px;
  }
`;

export const LogoImg = styled.img`
  cursor: pointer;
`;

export const ArrowLeft = styled.img`
  width: 12px;
  margin-left: 20px;
`;

export const TitleWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  text-align: center;
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.063rem;
  line-height: 25px;
  text-align: center;
`;

export const SettingImg = styled.img`
  margin-left: 20px;
`;

export const FooterArrow = styled.img``;

export const CenterWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media ${breakPoints.tablet} {
    width: 40%;
  }
`;

export const Comment = styled.img``;

export const CommentNumber = styled.div`
  padding-left: 5px;
  font-weight: 350;
  font-size: 0.875rem;
  letter-spacing: 0.232836px;
`;

export const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.8rem;
  padding: 0px 5px;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    font-size: 1rem;
  }
`;

export const LeftWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  @media ${breakPoints.tablet} {
    width: 30%;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;

export const WrapFont = styled.div`
  display: flex;
`;

export const RightWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 30%;
  }

  @media ${breakPoints.mobile} {
    display: none;
  }
`;
