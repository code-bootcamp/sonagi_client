import { MouseEventHandler } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IProfileModifyPresenterProps {
  onClickDelete: MouseEventHandler<HTMLDivElement> | undefined;
  data: any;
  isDelete: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickChangeUser: any;
}
