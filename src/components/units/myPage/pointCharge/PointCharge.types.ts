import { MouseEventHandler } from "react";

export interface IPointChargePresenterProps {
  requestPay: MouseEventHandler<HTMLDivElement> | undefined;
  value: any;
  pointData: any;
  loginData: any;
  onClickPoint: any;
  el?: any;
}

export interface IPointChargeStylesProps {
  value: any;
  el: any;
}
