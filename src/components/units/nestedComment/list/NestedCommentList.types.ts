import { MouseEventHandler } from "react";

export interface INestedCommentListContainerProps {
  el: any;
}

export interface INestedCommentListPresenterProps {
  onClickLikeComment: MouseEventHandler<HTMLImageElement> | undefined;
  DeleteNestedComment: MouseEventHandler<HTMLImageElement> | undefined;
  el: any;
}
