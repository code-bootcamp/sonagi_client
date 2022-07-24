import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface INoticeWritePresenterProps {
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  fileUrls: string[];
  onChangeFileUrls: (fileUrl: string, index: number) => void;
  onClickNoticeSubmit: any;
  onClickList: any;
}
