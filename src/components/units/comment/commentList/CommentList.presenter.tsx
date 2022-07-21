import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import CommentListPresenterItem from "./CommentList.presenterItem";
import { ICommentListPresenterProps } from "./CommentList.types";
// import * as S from "./CommentList.styles";
export default function CommentListPresenter(
  props: ICommentListPresenterProps
) {
  return (
    // <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
    //   {props.data?.fetchCommentsFromBoard?.map((el) => (
    //     <CommentListPresenterItem key={el.id} el={el} />
    //   ))}
    // </InfiniteScroll>
    <InfiniteScroll pageStart={0} hasMore={true}>
      {props.CommentData?.fetchBoard?.comments.map((el: { id: any }) => (
        <CommentListPresenterItem
          key={el.id}
          el={el}
          CommentData={props.CommentData}
          UserData={props.UserData}
          onClickLikeComment={undefined}
        />
      ))}
    </InfiniteScroll>
  );
}
