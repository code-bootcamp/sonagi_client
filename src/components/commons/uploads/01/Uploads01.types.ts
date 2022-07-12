import { ChangeEvent, RefObject } from "react";

export interface IUploads01Props {
  index: number;
  fileUrls: string;

  defaultFileUrl?: string;
  onChangeFileUrls: (fileUrl: string, index: number) => void;
}

export interface IUploads01UIProps {
  fileRef: RefObject<HTMLInputElement>;
  fileUrls: string;
  defaultFileUrl?: string;
  onClickUpload: () => void;
  onChangeFileUrls: (event: ChangeEvent<HTMLInputElement>) => void;
}
