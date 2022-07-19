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
  isValid: any;
  formState: FormState<FieldValues>;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSignUp: any;
  onClickMoveToMain: () => void;
  onClickSendPhone: () => void;
  onClickAuthPhone: () => void;
  onChangePhone: any;
  onChangeToken: any;
}
