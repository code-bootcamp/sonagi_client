import { useQuery } from "@apollo/client";
import React from "react";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import ProfileCertifyPresenter from "./ProfileCertify.presenter";
import { COMPARE_PASSWORD } from "./ProfileCertify.queries";

export default function ProfileCertifyContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(COMPARE_PASSWORD, {
    variables: { pwd: "dlgmlwn45!" },
  });

  console.log(data);

  return <ProfileCertifyPresenter onClickMoveToPage={onClickMoveToPage} />;
}
