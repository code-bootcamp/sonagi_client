import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import FreeBoardDetailPresenter from "./FreeBoardDetail.presenter";
import { FETCH_BOARDS } from "./FreeBoardDetail.queries";

export default function FreeBoardDetailContainer() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();
  const onClickMoveToBoardList = () => {
    router.push("/freeBoard");
  };
  console.log("데이터", data);
  return (
    <FreeBoardDetailPresenter
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
    />
  );
}
