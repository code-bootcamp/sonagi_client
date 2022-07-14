import React from "react";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import ProfileCertifyPresenter from "./ProfileCertify.presenter";

export default function ProfileCertifyContainer() {
  const { onClickMoveToPage } = useMoveToPage();

  return <ProfileCertifyPresenter onClickMoveToPage={onClickMoveToPage} />;
}
