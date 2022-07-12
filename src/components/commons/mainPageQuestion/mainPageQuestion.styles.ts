import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/media";

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
  font-weight: 700;
  font-size: 35px;
  text-align: center;
  color: #484848;
  margin: 10px 0px 50px 0px;
`;

export const QuestionBox = styled.div`
  width: 90%;
  height: ${(props: any) =>
    props.isAnswer1 || props.isAnswer2 || props.isAnswer3 || props.isAnswer4
      ? "260px"
      : "60px"};
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  padding: 10px 20px 10px 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(204, 204, 204, 0.25);
  border-radius: 20px;
  background-image: ${(props: any) =>
    props.isAnswer1 || props.isAnswer2 || props.isAnswer3 || props.isAnswer4
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
`;

export const QuestionContents = styled.div`
  padding-bottom: 10px;
  font-weight: 400;
  font-size: 24px;
  line-height: 41px;
  color: #484848;
  border-bottom: ${(props: any) =>
    props.isAnswer1 || props.isAnswer2 || props.isAnswer3 || props.isAnswer4
      ? "1px solid #bdbdbd"
      : "none"};

  @media (min-width: 767px) and (max-width: 991px) {
    width: 100%;
  }

  @media ${breakPoints.mobile} {
    font-size: 18px;
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
