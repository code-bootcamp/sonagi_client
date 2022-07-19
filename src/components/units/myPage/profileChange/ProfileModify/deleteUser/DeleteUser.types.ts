import { MouseEventHandler } from "react";

export interface IDeleteUserPresenterProps {
  onClickDeleteUser: MouseEventHandler<HTMLButtonElement> | undefined;
  onClickCheck: MouseEventHandler<HTMLInputElement> | undefined;
  setCheck: any;
}

export interface IDeleteUserStylesProps {
  setCheck: any;
}
