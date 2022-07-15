import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import FreeBoardDetailPresenter from "./FreeBoardDetail.presenter";
import { FETCH_BOARD } from "./FreeBoardDetail.queries";

export default function FreeBoardDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });
  console.log("데이터", data);
  const onClickMoveToBoardList = () => {
    router.push("/freeBoard");
  };
  return (
    <FreeBoardDetailPresenter
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
    />
  );
}
