import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
  display: flex;
  flex-direction: column;
  align-items: center;

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
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #e0e0e0;
  display: ${(props) => (props.setDisplay ? "default" : "none")};
`;

export const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  display: flex;
  flex-direction: row;
  background-color: #ffd2dd;

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
  background-color: #e0e0e0;
  display: ${(props) => (props.setDisplay ? "default" : "none")};
`;

export const LogoImg = styled.img`
  cursor: pointer;
`;

export const ArrowLeft = styled.img`
  width: 12px;
  margin-left: 20px;
`;

export const TitleWrapper = styled.div`
  width: 90%;
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
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Comment = styled.img``;

export const CommentNumber = styled.div`
  padding-left: 5px;
  font-weight: 350;
  font-size: 0.875rem;
  line-height: 21px;
  letter-spacing: 0.232836px;
`;

export const Content = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  text-align: center;
  padding: 0px 5px;
  cursor: pointer;
`;

export const LeftWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  cursor: pointer;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 10%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

export const RightWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 10%;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
