import { ChangeEventHandler } from "react";

export interface IFreeBoardWriteContainer {
  data: any;
  isEdit: any;
  createBoard?: string;
}

export interface IFreeBoardWritePresenterProps {
  fileUrls: any;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickUpdate: any;
  onClickSubmit: any;
  onChangeContents: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  data: any;
  onChangeTitle: ChangeEventHandler<HTMLInputElement> | undefined;
  isEdit: any;
}
