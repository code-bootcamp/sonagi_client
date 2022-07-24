import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";
import {
  IMainPageQuestionStyledProps1,
  IMainPageQuestionStyledProps2,
  IMainPageQuestionStyledProps3,
  IMainPageQuestionStyledProps4,
} from "./mainPageQuestion.types";

export const QuestionWrapper = styled.div`
  /* height: 580px; */
  width: 100%;
  background: #bee3ff;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const QuestionTitle = styled.div`
  font-weight: 500;
  font-size: 2.5rem;
  text-align: center;
  color: #484848;
  margin: 10px 0px 50px 0px;
`;

export const QuestionBox1 = styled.div`
  width: 90%;
  height: ${(props: IMainPageQuestionStyledProps1) =>
    props.isAnswer1 ? "260px" : "60px"};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  background-image: ${(props: IMainPageQuestionStyledProps1) =>
    props.isAnswer1
      ? "url(/mainpage/arrowUp.png)"
      : "url(/mainpage/arrow.png)"};
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  }

  @media ${breakPoints.mobile} {
    height: ${(props: IMainPageQuestionStyledProps1) =>
      props.isAnswer1 ? "410px" : "60px"};
  }
`;

export const QuestionContents1 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 41px;
  color: #484848;
  border-bottom: ${(props: IMainPageQuestionStyledProps1) =>
    props.isAnswer1 ? "1px solid #bdbdbd" : "none"};

  @media (min-width: 767px) and (max-width: 991px) {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const QuestionBox2 = styled.div`
  width: 90%;
  height: ${(props: IMainPageQuestionStyledProps2) =>
    props.isAnswer2 ? "260px" : "60px"};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  background-image: ${(props: IMainPageQuestionStyledProps2) =>
    props.isAnswer2
      ? "url(/mainpage/arrowUp.png)"
      : "url(/mainpage/arrow.png)"};
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  }

  @media ${breakPoints.mobile} {
    height: ${(props: IMainPageQuestionStyledProps2) =>
      props.isAnswer2 ? "410px" : "60px"};
  }
`;

export const QuestionContents2 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 41px;
  color: #484848;
  border-bottom: ${(props: IMainPageQuestionStyledProps2) =>
    props.isAnswer2 ? "1px solid #bdbdbd" : "none"};

  @media (min-width: 767px) and (max-width: 991px) {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const QuestionBox3 = styled.div`
  width: 90%;
  height: ${(props: IMainPageQuestionStyledProps3) =>
    props.isAnswer3 ? "260px" : "60px"};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  background-image: ${(props: IMainPageQuestionStyledProps3) =>
    props.isAnswer3
      ? "url(/mainpage/arrowUp.png)"
      : "url(/mainpage/arrow.png)"};
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  }

  @media ${breakPoints.mobile} {
    height: ${(props: IMainPageQuestionStyledProps3) =>
      props.isAnswer3 ? "410px" : "60px"};
  }
`;

export const QuestionContents3 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 41px;
  color: #484848;
  border-bottom: ${(props: IMainPageQuestionStyledProps3) =>
    props.isAnswer3 ? "1px solid #bdbdbd" : "none"};

  @media (min-width: 767px) and (max-width: 991px) {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const QuestionBox4 = styled.div`
  width: 90%;
  height: ${(props: IMainPageQuestionStyledProps4) =>
    props.isAnswer4 ? "260px" : "60px"};
  display: flex;
  transition: 0.3s;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  background-image: ${(props: IMainPageQuestionStyledProps4) =>
    props.isAnswer4
      ? "url(/mainpage/arrowUp.png)"
      : "url(/mainpage/arrow.png)"};
  background-repeat: no-repeat;
  background-position: top 25px right 20px;
  cursor: pointer;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 90%;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  }

  @media ${breakPoints.mobile} {
    height: ${(props: IMainPageQuestionStyledProps4) =>
      props.isAnswer4 ? "410px" : "60px"};
  }
`;

export const QuestionContents4 = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 41px;
  color: #484848;
  border-bottom: ${(props: IMainPageQuestionStyledProps4) =>
    props.isAnswer4 ? "1px solid #bdbdbd" : "none"};

  @media (min-width: 767px) and (max-width: 991px) {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    font-size: 1rem;
  }
`;

export const AnswerContents = styled.div`
  margin: 10px 0px 0px 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 29px;
  color: #555555;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 100%;
  }
`;
