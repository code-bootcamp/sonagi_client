import { Dispatch, MouseEventHandler, SetStateAction } from "react";

export interface ICommentListPresenterProps {
  data: any;
  onLoadMore: (page: number) => void;
}

export interface ICommentListPresenterItemProps {
  data: any;
  onClickLikeComment: MouseEventHandler<HTMLImageElement> | undefined;
  el: any;
  setIsNested?: Dispatch<SetStateAction<boolean>>;
  isNested?: boolean;
}
