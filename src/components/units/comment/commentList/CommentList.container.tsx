import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import CommentListPresenter from "./CommentList.presenter";
import { FETCH_BOARD } from "./CommentList.queries";
// import { FETCH_COMMENTS_FROM_BOARD } from "./CommentList.queries";

export default function CommentListContainer() {
  const router = useRouter();
  // const { data } = useQuery(FETCH_COMMENTS, {
  //   variables: { commentID: router.query._id },
  // });
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });
  // const { data } = useQuery(FETCH_COMMENTS_FROM_BOARD, {
  //   variables: { boardID: router.query._id },
  // });
  console.log("댓글리스트data", data);

  return (
    <CommentListPresenter
      data={data}
      onLoadMore={function (page: number): void {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
