import { useQuery } from "@apollo/client";
import React from "react";
import FreeBoardDetailPresenter from "./FreeBoardDetail.presenter";
import { FETCH_BOARDS } from "./FreeBoardDetail.queries";

export default function FreeBoardDetailContainer() {
  const { data } = useQuery(FETCH_BOARDS);
  return <FreeBoardDetailPresenter data={data} />;
}
