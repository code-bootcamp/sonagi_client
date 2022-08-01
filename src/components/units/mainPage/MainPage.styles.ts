import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
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
