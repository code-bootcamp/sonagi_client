import { MouseEventHandler } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IVolumeWritePresenterProps {
  onClickRule: MouseEventHandler<HTMLInputElement> | undefined;
  onClickMoveToPage: any;
  onClickSubmit: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  data?: any;
  onChangeDescription: (value: string) => void;
  editorRef?: any;
  onClickFinish: () => void;
  onClickNotice: () => void;
  onClickEpisode: () => void;
  isNotice: boolean;
  isEpisode: boolean;
}

export interface IVolumeWriteStyles {
  isEpisode?: boolean;
  isNotice?: boolean;
}
