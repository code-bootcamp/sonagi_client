import {
  Key,
  MouseEventHandler,
  ReactChild,
  ReactFragment,
  ReactPortal,
} from "react";

export interface IMyBoardListPresenterProps {
  CommentData: any;
  BoardData: any;
  onClickMyBordList: MouseEventHandler<HTMLDivElement> | undefined;
  isBoardList: boolean;
  onClickMyProductList: MouseEventHandler<HTMLDivElement> | undefined;
  onClickMoveToDetail: (arg0: {
    id: Key | null | undefined;
    title:
      | boolean
      | ReactChild
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
    contents:
      | boolean
      | ReactChild
      | ReactFragment
      | ReactPortal
      | null
      | undefined;
    createAt: any;
  }) => MouseEventHandler<HTMLDivElement> | undefined;
}
