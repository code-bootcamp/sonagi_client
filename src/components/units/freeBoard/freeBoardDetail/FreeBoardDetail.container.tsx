import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React from "react";
import FreeBoardDetailPresenter from "./FreeBoardDetail.presenter";
import {
  DELETE_BOARD,
  FETCH_BOARD,
  FETCH_LOGIN_USER,
} from "./FreeBoardDetail.queries";

export default function FreeBoardDetailContainer() {
  const router = useRouter();
  const { data: UserData } = useQuery(FETCH_LOGIN_USER);
  const { data: BoardData } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const onClickDelete = () => {
    try {
      deleteBoard({
        variables: { BoardID: router.query._id },
      });
      // alert("게시글이 삭제되었습니다.");
      Modal.success({ content: "게시글이 삭제되었습니다." });
      router.push("/freeBoard");
    } catch (error: any) {
      // alert(error);
      Modal.error({ content: error.message });
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
      // data={data}
      onClickMoveToBoardList={onClickMoveToBoardList}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      UserData={UserData}
      BoardData={BoardData}
      LoginData={undefined}
      data={undefined}
    />
  );
}
