import { useQuery } from "@apollo/client";
import React from "react";
import useMoveToPage from "../../../../../commons/hooks/UseMoveToPage";
import InquireListPresenter from "./InquireList.presenter";
import { FETCH_QUESTION } from "./InquireList.queries";

export default function InquireListContainer() {
  const { onClickMoveToPage } = useMoveToPage();

  const { data } = useQuery(FETCH_QUESTION);

  return (
    <InquireListPresenter onClickMoveToPage={onClickMoveToPage} data={data} />
  );
}
