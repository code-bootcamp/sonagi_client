import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { withAuth } from "../../../../commons/hooks/withAuth";
import FreeBoardListPresenter from "./FreeBoardList.presenter";
import {
  FETCH_BOARDS_ALL,
  FETCH_BOARD_ALL_COUNT,
} from "./FreeBoardList.queries";

function FreeBoardListContainer() {
  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_BOARDS_ALL);
  // const result = data.sort((a, b) => a.createAt - b.createAt);
  // console.log(result);
  // console.log("데이터", data);

  const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery(
    FETCH_BOARD_ALL_COUNT
  );

  const onClickMoveToFreeBoardWrite = () => {
    router.push("/freeBoard/new");
  };

  const onClickMoveToFreeBoardDetail = (el) => () => {
    console.log("el", el);
    router.push(`/freeBoard/${el.id}`);
  };

  return (
    <FreeBoardListPresenter
      onClickMoveToFreeBoardWrite={onClickMoveToFreeBoardWrite}
      data={data}
      refetch={refetch}
      count={dataBoardsCount?.fetchBoardAllCount}
      refetchBoardsCount={refetchBoardsCount}
      onClickMoveToFreeBoardDetail={onClickMoveToFreeBoardDetail}
    />
  );
}

export default withAuth(FreeBoardListContainer);
