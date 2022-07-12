import { useQuery } from "@apollo/client";
import React from "react";
import FreeBoardDetailPresenter from "./FreeBoardDetail.presenter";
import { FETCH_BOARDS } from "./FreeBoardDetail.queries";

export default function FreeBoardDetailContainer() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log("데이터", data);
  return <FreeBoardDetailPresenter data={data} />;
}
