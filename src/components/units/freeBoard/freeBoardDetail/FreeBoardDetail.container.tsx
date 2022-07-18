import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import FreeBoardDetailPresenter from "./FreeBoardDetail.presenter";
import { DELETE_BOARD, FETCH_BOARD } from "./FreeBoardDetail.queries";

export default function FreeBoardDetailContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });
  console.log("페치데이터", data);
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickDelete = () => {
    try {
      deleteBoard({
        variables: { BoardID: router.query._id },
      });
      alert("게시글이 삭제되었습니다.");
      router.push("/freeBoard");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToEdit = () => {
    router.push(`/freeBoard/${router.query._id}/edit`);
  };

  const onClickMoveToBoardList = () => {
    router.push("/freeBoard");
  };

  return (
    <FreeBoardDetailPresenter
      data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
    />
  );
}
