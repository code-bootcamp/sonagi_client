import { ChangeEvent } from "react";
import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISignupContainerProps {}

export interface ISignupPresenterProps {
  sendPhone: any;
  setAgree1: any;
  setAgree2: any;
  phoneCheck: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSignUp: any;
  onClickMoveToMain: () => void;
  onClickSendPhone: () => void;
  onClickAuthPhone: () => void;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;
}
