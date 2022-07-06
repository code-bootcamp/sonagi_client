import { useState } from "react";
import MainPagePresenter from "./MainPage.presenter";

export default function MainPageContainer() {
  const [isAnswer, setIsAnswer] = useState(false);

  const onClickQuestion1 = () => {
    setIsAnswer((prev) => !prev);
  };

  const onClickQuestion2 = () => {
    setIsAnswer((prev) => !prev);
  };

  const onClickQuestion3 = () => {
    setIsAnswer((prev) => !prev);
  };

  const onClickQuestion4 = () => {
    setIsAnswer((prev) => !prev);
  };

  return (
    <MainPagePresenter
      onClickQuestion1={onClickQuestion1}
      onClickQuestion2={onClickQuestion2}
      onClickQuestion3={onClickQuestion3}
      onClickQuestion4={onClickQuestion4}
      isAnswer={isAnswer}
    />
  );
}
