import React from "react";
import CommentListPresenterItem from "./CommentList.presenterItem";
import { ICommentListPresenterProps } from "./CommentList.types";
export default function CommentListPresenter(
  props: ICommentListPresenterProps
) {
  return (
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
              NestedData={undefined}
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
