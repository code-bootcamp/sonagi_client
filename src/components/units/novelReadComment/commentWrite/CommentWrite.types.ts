import { Dispatch, SetStateAction } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IReadCommentWriteContainerProps {
  setIsEdit: Dispatch<SetStateAction<boolean>>;
  setIsGoCommnet: Dispatch<SetStateAction<boolean>>;
  isEdit: boolean;
  el: {
    contents?: string;
    createAt?: string;
    id?: string;
    likeCount?: number;
    updateAt?: number;
    user?: {
      id?: string;
      nickName?: string;
    };
  };
}

export interface Idata {
  contents: string;
  star: number;
  episodeID: string;
}

export interface IReadCommentWritePresenterProps {
  onClickComment: any;
  onClickUpdateComment: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  formState: FormState<FieldValues>;
  isEdit: boolean;
  el: any;
  click: boolean;
  setClick: Dispatch<SetStateAction<boolean>>;
  onClickGoList: () => void;
}
