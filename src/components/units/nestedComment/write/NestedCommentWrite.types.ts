import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";

export interface INestedCommentWriteProps {
  el: any;
  setIsNested?: Dispatch<SetStateAction<boolean>>;
  isNested?: boolean;
}

export interface INestedCommentWritePresenterProps {
  WriteNestedComment: MouseEventHandler<HTMLDivElement> | undefined;
  contents: any;
  el: any;
  onChangeContents: ChangeEventHandler<HTMLInputElement> | undefined;
}
