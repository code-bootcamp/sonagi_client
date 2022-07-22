import { Key } from "react";

export interface IDonateNovelContainerProps {}

export interface IDonateNovelPresenterProps {
  setIsDonate: any;
  isDonate: any;
  point: any;
  novel: any;
  id: Key | null | undefined;
  data: any;
  el?: any;
  onClickMoveToPage: any;
  onClickDonate: any;
}
