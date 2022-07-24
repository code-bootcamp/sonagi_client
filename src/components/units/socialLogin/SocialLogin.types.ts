import {
  FieldValues,
  FormState,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ISocialLoginContainerProps {}

export interface ISocialLoginPresenterProps {
  setAgree2: any;
  setAgree1: any;
  phoneCheck: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSignUp: any;
  onClickSendPhone: () => void;
  onClickAuthPhone: () => void;
  onChangePhone: any;
  onChangeToken: any;
}
