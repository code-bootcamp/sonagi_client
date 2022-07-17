import React from "react";

import DetailCommentListPresenterItem from "./CommentList.presenterItem";

export default function DetailCommentListPresenter(props) {
  return (
    <>
      {props.data?.fetchNovelReviewAll.map((el) => (
        <DetailCommentListPresenterItem key={el.id} el={el} />
      ))}
    </>
  );
}
