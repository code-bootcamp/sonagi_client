import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ICommentListPresenterProps {
  UserData: any;
  NestedData: any;
  CommentData: any;
  data: any;
  onLoadMore: (page: number) => void;
}

export interface ICommentListPresenterItemProps {
  UserData: any;
  CommentData: any;
  NestedData: any;
  data: any;
  onClickLikeComment: MouseEventHandler<HTMLImageElement> | undefined;
  el: any;
  setIsNested?: Dispatch<SetStateAction<boolean>>;
  isNested?: boolean;
}
