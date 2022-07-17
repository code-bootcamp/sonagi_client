import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import DetailCommentListPresenter from "./CommentList.presenter";

import { FETCH_NOVEL_REVIEW_ALL } from "./CommentList.queries";

export default function DetailCommentListContainer() {
  const router = useRouter();
  const { data } = useQuery(FETCH_NOVEL_REVIEW_ALL, {
    variables: { novel: router.query._id },
  });

  console.log("데이터", data);
  return <DetailCommentListPresenter data={data} />;
}
