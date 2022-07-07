import React from "react";
import useMoveToPage from "../../../commons/hooks/UseMoveToPage";

import VolumeWritePresenter from "./VolumeWrite.presenter";

export default function VolumeWriteContainer() {
  const { onClickMoveToPage } = useMoveToPage();

  return <VolumeWritePresenter onClickMoveToPage={onClickMoveToPage} />;
}
