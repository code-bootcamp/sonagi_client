import { MouseEventHandler } from "react";

export interface INestedCommentListContainerProps {
  el: any;
}

export interface INestedCommentListPresenterProps {
  answerEL: any;
  onClickLikeComment: MouseEventHandler<HTMLImageElement> | undefined;
  DeleteNestedComment: MouseEventHandler<HTMLImageElement> | undefined;
  el: any;
}
