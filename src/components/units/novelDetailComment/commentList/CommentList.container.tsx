import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import DetailCommentListPresenter from "./CommentList.presenter";

import { FETCH_COMMENTS } from "./CommentList.queries";

export default function DetailCommentListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_COMMENTS, {
    variables: { commentID: router.query._id },
  });

  console.log("데이터", data);
  return <DetailCommentListPresenter data={data} />;
}
