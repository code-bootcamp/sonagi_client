import { ChangeEvent } from "react";

export interface ISocialLoginContainerProps {}

export interface ISocialLoginPresenterProps {
  setAgree2: any;
  setAgree1: any;
  phoneCheck: any;
  formState: any;
  isValid: any;
  handleSubmit: any;
  register: any;
  onClickSignUp: () => void;
  onClickMoveToMain: () => void;
  onClickSendPhone: () => void;
  onClickAuthPhone: () => void;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;
}
