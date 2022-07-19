import { ChangeEvent } from "react";

export interface ISignupContainerProps {}

export interface ISignupPresenterProps {
  formState: any;
  handleSubmit: any;
  register: any;
  onClickSignUp: () => void;
  onClickMoveToMain: () => void;
  onClickSendPhone: () => void;
  onClickAuthPhone: () => void;
  onChangePhone: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeToken: (event: ChangeEvent<HTMLInputElement>) => void;
}
