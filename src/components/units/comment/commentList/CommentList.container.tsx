import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import CommentListPresenter from "./CommentList.presenter";
import { FETCH_BOARD, FETCH_LOGIN_USER } from "./CommentList.queries";

export default function CommentListContainer() {
  const router = useRouter();
  const { data: UserData } = useQuery(FETCH_LOGIN_USER);
  const { data: CommentData } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });
  const { data: NestedData } = useQuery(FETCH_BOARD, {
    variables: { boardID: router.query._id },
  });

  return (
    <CommentListPresenter
      CommentData={CommentData}
      NestedData={NestedData}
      UserData={UserData}
      onLoadMore={function (page: number): void {
        throw new Error("Function not implemented.");
      }}
      data={undefined}
    />
  );
}
