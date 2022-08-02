import {
  ChangeEventHandler,
  Dispatch,
  MouseEventHandler,
  SetStateAction,
} from "react";

export interface INestedCommentWriteProps {
  [x: string]: any;
  el: any;
  setIsNested?: Dispatch<SetStateAction<boolean>>;
  isNested?: boolean;
}

export interface INestedCommentWritePresenterProps {
  onClickUpdateNestedComment: MouseEventHandler<HTMLDivElement> | undefined;
  answerEL: any;
  onClickUpdateComment: MouseEventHandler<HTMLDivElement> | undefined;
  isHidden: any;
  WriteNestedComment: MouseEventHandler<HTMLDivElement> | undefined;
  contents: any;
  el: any;
  isEdit: any;
  setIsEdit: any;
  onChangeContents: ChangeEventHandler<HTMLInputElement> | undefined;
}
