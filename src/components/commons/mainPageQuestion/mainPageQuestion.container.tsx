import { useState } from "react";
import MainPageQuestionPresenter from "./mainPageQuestion.presenter";

export default function MainPageQuestionContainer() {
  const [isAnswer1, setIsAnswer1] = useState(false);
  const [isAnswer2, setIsAnswer2] = useState(false);
  const [isAnswer3, setIsAnswer3] = useState(false);
  const [isAnswer4, setIsAnswer4] = useState(false);

  const onClickQuestion1 = () => {
    setIsAnswer1((prev) => !prev);
  };

  const onClickQuestion2 = () => {
    setIsAnswer2((prev) => !prev);
  };

  const onClickQuestion3 = () => {
    setIsAnswer3((prev) => !prev);
  };

  const onClickQuestion4 = () => {
    setIsAnswer4((prev) => !prev);
  };

  return (
    <MainPageQuestionPresenter
      onClickQuestion1={onClickQuestion1}
      onClickQuestion2={onClickQuestion2}
      onClickQuestion3={onClickQuestion3}
      onClickQuestion4={onClickQuestion4}
      isAnswer1={isAnswer1}
      isAnswer2={isAnswer2}
      isAnswer3={isAnswer3}
      isAnswer4={isAnswer4}
    />
  );
}
