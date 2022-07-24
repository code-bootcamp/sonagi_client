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
  }

  @media (max-width: 767px) {
    max-width: 767px;
  }
`;

export const HeadWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  font-size: ${(props: INovelReadStyles) => props.fontsize}px;
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
  margin: 0;
  @media (min-width: 767px) and (max-width: 991px) {
    min-width: 767px;
    max-width: 991px;
    width: 100%;
    padding: 30px;
  }

  @media (max-width: 767px) {
    max-width: 767px;
    width: 100%;
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

  @media ${breakPoints.mobile} {
    flex-direction: column;
    height: 12%;
  }
`;

export const LogoImg = styled.img`
  cursor: pointer;

  @media ${breakPoints.mobile} {
    width: 60px;
  }
`;

export const ArrowLeft = styled.img`
  width: 12px;
  margin-left: 20px;

  @media ${breakPoints.mobile} {
    width: 9px;
    margin-left: 10px;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 0.8rem;
  }
`;

export const SubTitle = styled.div`
  font-weight: 500;
  font-size: 1.063rem;
  line-height: 25px;
  text-align: center;

  @media ${breakPoints.mobile} {
    font-size: 0.9rem;
  }
`;

export const SettingImg = styled.img`
  margin-left: 20px;
  width: 35px;

  @media ${breakPoints.mobile} {
    width: 25px;
  }
`;

export const MarkImg = styled.img`
  margin-left: 20px;
  width: 25px;

  @media ${breakPoints.mobile} {
    width: 20px;
  }
`;

export const FooterArrow = styled.img``;

export const CenterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* margin-left: 170px; */

  @media ${breakPoints.mobile} {
    display: none;
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
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  width: 30%;

  @media ${breakPoints.tablet} {
    /* width: 30%; */
  }

  @media ${breakPoints.mobile} {
    /* width: 100%; */
  }
`;

export const LeftWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const WrapFont = styled.div`
  display: flex;
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-right: 10px;
  width: 30%;

  @media ${breakPoints.mobile} {
    width: 100%;
  }
`;

export const RightWrapperTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  margin-right: 10px;
`;

export const CenterWrapperMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
