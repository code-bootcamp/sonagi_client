import React from "react";
// import NestedCommentListContainer from "../../nestedComment/list/NestedCommentList.container";
// import InfiniteScroll from "react-infinite-scroller";
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

    // 이전부분
    <>
      {props.CommentData?.fetchBoard?.comments.map(
        (el: { id: React.Key | null | undefined }) => (
          <>
            <CommentListPresenterItem
              key={el.id}
              el={el}
              CommentData={props.CommentData}
              UserData={props.UserData}
              onClickLikeComment={undefined}
              data={undefined}
            />
            {/* <NestedCommentListContainer /> */}
          </>
        )
      )}
    </>
    // ---
    // <>
    //   {props.CommentData?.fetchBoard?.comments.map((el) =>
    //     el.children.map((answerEL) => (
    //       <>
    //         <CommentListPresenterItem
    //           key={el.id}
    //           el={el}
    //           CommentData={props.CommentData}
    //           UserData={props.UserData}
    //           onClickLikeComment={undefined}
    //         />
    //         {/* <NestedCommentListContainer answerEL={answerEL} /> */}
    //       </>
    //     ))
    //   )}
    // </>
  );
}
