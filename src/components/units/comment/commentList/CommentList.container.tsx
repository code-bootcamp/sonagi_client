import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import CommentListPresenter from "./CommentList.presenter";
import { CREATE_COMMENT, FETCH_COMMENTS } from "./CommentList.queries";

export default function CommentListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_COMMENTS, {
    variables: { commentID: router.query._id },
  });
  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: { boardID: router.query._id },
  // });
  console.log("댓글리스트data", data);

  const [createComment] = useMutation(CREATE_COMMENT);
  const onClickLikeComment = async () => {
    const result = await createComment({
      variables: {
        board: String(router.query._id),
      },
      refetchQueries: [
        {
          query: FETCH_COMMENTS,
        },
      ],
    });
    console.log("result", result);
  };
  return (
    <CommentListPresenter data={data} onClickLikeComment={onClickLikeComment} />
  );
}
