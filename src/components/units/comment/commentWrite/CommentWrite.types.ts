import { ChangeEventHandler, MouseEventHandler } from "react";

export interface ICommentWriteContainerProps {
  isAnswerEdit: any;
  isAnswer: any;
  isEdit: any;
  setIsEdit: any;
  el: any;
}

export interface ICommentWritePresenterProps {
  handleSubmit(
    onClickUpdateComment: MouseEventHandler<HTMLDivElement> | undefined
  ): import("react").FormEventHandler<HTMLFormElement> | undefined;
  onClickRegisterComment: MouseEventHandler<HTMLDivElement> | undefined;
  onClickUpdateComment: MouseEventHandler<HTMLDivElement> | undefined;
  contents: any;
  el: any;
  onChangeContents: ChangeEventHandler<HTMLInputElement> | undefined;
  isEdit: any;
}
