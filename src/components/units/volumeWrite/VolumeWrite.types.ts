import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IVolumeWritePresenterProps {
  onClickMoveToPage: any;
  onClickSubmit: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  data?: any;
  onChangeDescription: (value: string) => void;
  editorRef?: any;
  onClickFinish: () => void;
}
