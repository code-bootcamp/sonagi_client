import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { withAuth } from "../../../../commons/hooks/withAuth";
import FreeBoardListPresenter from "./FreeBoardList.presenter";
import { FETCH_BOARDS_ALL } from "./FreeBoardList.queries";

function FreeBoardListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS_ALL);
  console.log("데이터", data);

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

export default withAuth(FreeBoardListContainer);
