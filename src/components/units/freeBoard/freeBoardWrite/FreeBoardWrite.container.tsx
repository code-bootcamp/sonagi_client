import React, { useState } from "react";
import FreeBoardWritePresenter from "./FreeBoardWrite.presenter";
export default function FreeBoardWriteContainer() {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  return (
    <FreeBoardWritePresenter fileUrls={fileUrls} setFileUrls={setFileUrls} />
  );
}
