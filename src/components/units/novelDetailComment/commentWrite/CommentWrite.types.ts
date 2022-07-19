import { Dispatch, SetStateAction } from "react";
import { FieldValues, FormState, UseFormRegister } from "react-hook-form";

export interface Idata {
  contents: string;
  star: number;
}

export interface Iel {
  contents: string;
  createAt: string;
  id: string;
  likeCount: number;
  updateAt: number;
  user: {
    id: string;
    nickName: string;
  };
}

export interface IDetailCommentWriteContainerProps {
  el?: any;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
}

export interface IDetailCommentWritePresenterProps {
  onClickComment: (data: Idata) => Promise<void>;
  handleSubmit: any;
  register: UseFormRegister<FieldValues>;
  formState: FormState<FieldValues>;
  onClickUpdateComment: (data: Idata) => Promise<void>;
  setStar: Dispatch<SetStateAction<number>>;
  star: number;
  onChagneStar: (value: number) => void;
  isEdit: boolean;
  el: Iel;
  click: boolean;
  setClick: Dispatch<SetStateAction<boolean>>;
}
