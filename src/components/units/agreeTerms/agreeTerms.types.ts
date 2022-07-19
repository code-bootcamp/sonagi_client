import { MouseEventHandler } from "react";

export interface IAgreeTermsContainerProps {
  setAgree2: any;
  setAgree1: any;
}

export interface IAgreeTermsPresenterProps {
  onClickClose: MouseEventHandler<HTMLButtonElement> | undefined;
  CheckBox: string;
  setCheckBox: any;
  onClickCheck3: MouseEventHandler<HTMLImageElement> | undefined;
  onClickCheck2: MouseEventHandler<HTMLImageElement> | undefined;
  onClickCheckAgree2: MouseEventHandler<HTMLInputElement> | undefined;
  onClickCheck1: MouseEventHandler<HTMLImageElement> | undefined;
  onClickCheckAgree1: MouseEventHandler<HTMLInputElement> | undefined;
}
