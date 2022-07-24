import { MouseEventHandler } from "react";

export interface IRecentWatchPresenterProps {
  onClickMoveToNovelDetail: MouseEventHandler<HTMLDivElement> | undefined;
  basketItems: any;
}
