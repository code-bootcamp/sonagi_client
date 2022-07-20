import { ChangeEventHandler, MouseEventHandler } from "react";

export interface ICommentWriteContainerProps {
  isAnswerEdit: any;
  isAnswer: any;
  isEdit: any;
  setIsEdit: any;
  el: any;
}

export interface ICommentWritePresenterProps {
  onClickRegisterComment: MouseEventHandler<HTMLDivElement> | undefined;
  onClickUpdateComment: MouseEventHandler<HTMLDivElement> | undefined;
  contents: any;
  el: any;
  onChangeContents: ChangeEventHandler<HTMLInputElement> | undefined;
  isEdit: any;
}
