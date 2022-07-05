import React, { useState } from "react";
import NovelWritePresenter from "./NovelWrite.presenter";

export default function NovelWriteContainer() {
  const [isClickPre, setIsClickPre] = useState(false);
  const [isClickDay, setIsClickDay] = useState(true);
  //
  const onClickCycleButton = () => {
    setIsClickPre((prev) => !prev);
    setIsClickDay((prev) => !prev);
  };
  return (
    <NovelWritePresenter
      onClickCycleButton={onClickCycleButton}
      isClickPre={isClickPre}
      isClickDay={isClickDay}
    />
  );
}
