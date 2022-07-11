import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import FreeBoardListPresenter from "./FreeBoardList.presenter";
import { FETCH_BOARDS_ALL } from "./FreeBoardList.queries";

export default function FreeBoardListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS_ALL);
  console.log(data);

  const onClickMoveToFreeBoardWrite = () => {
    router.push("/freeBoard/new");
  };

  return (
    <FreeBoardListPresenter
      onClickMoveToFreeBoardWrite={onClickMoveToFreeBoardWrite}
      data={data}
    />
  );
}
