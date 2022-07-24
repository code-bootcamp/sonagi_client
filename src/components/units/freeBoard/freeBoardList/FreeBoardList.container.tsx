import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { withAuth } from "../../../../commons/hooks/withAuth";
import FreeBoardListPresenter from "./FreeBoardList.presenter";
import {
  FETCH_BOARDS_ALL,
  // FETCH_BOARD_ALL_COUNT,
} from "./FreeBoardList.queries";

function FreeBoardListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARDS_ALL);

  // const { data: dataBoardsCount, refetch: refetchBoardsCount } = useQuery(
  //   FETCH_BOARD_ALL_COUNT
  // );
  // console.log("dataBoardsCount", dataBoardsCount);

  const onClickMoveToFreeBoardWrite = () => {
    router.push("/freeBoard/new");
  };

  const onClickMoveToFreeBoardDetail = (el: { id: any }) => () => {
    console.log("el", el);
    router.push(`/freeBoard/${el.id}`);
  };

  return (
    <FreeBoardListPresenter
      onClickMoveToFreeBoardWrite={onClickMoveToFreeBoardWrite}
      data={data}
      // refetch={refetch}
      // count={dataBoardsCount?.fetchBoardAllCount}
      // refetchBoardsCount={refetchBoardsCount}
      onClickMoveToFreeBoardDetail={onClickMoveToFreeBoardDetail}
      count={undefined}
      refetch={undefined}
      // dataBoardsCount={dataBoardsCount}
    />
  );
}

export default withAuth(FreeBoardListContainer);
