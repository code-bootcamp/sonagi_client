import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import DetailCommentListPresenterItem from "./CommentList.presenterItem";

// import * as S from "./CommentList.styles";
export default function DetailCommentListPresenter(props) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchComments.map((el) => (
        <DetailCommentListPresenterItem key={el.id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
