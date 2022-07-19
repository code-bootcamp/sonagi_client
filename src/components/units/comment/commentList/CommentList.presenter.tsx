import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import CommentListPresenterItem from "./CommentList.presenterItem";
// import * as S from "./CommentList.styles";
export default function CommentListPresenter(props) {
  return (
    // <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
    //   {props.data?.fetchCommentsFromBoard?.map((el) => (
    //     <CommentListPresenterItem key={el.id} el={el} />
    //   ))}
    // </InfiniteScroll>
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchBoard?.comments.map((el) => (
        <CommentListPresenterItem key={el.id} el={el} />
      ))}
    </InfiniteScroll>
  );
}
