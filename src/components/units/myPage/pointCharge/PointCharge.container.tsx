import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useState } from "react";
import PointChargePresenter from "./PointCharge.presenter";
import {
  CREATE_PAYMENT,
  FETCH_LOGIN_USER,
  FETCH_PRODUCTS_ALL,
} from "./PointCharge.queries";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointChargeContainer() {
  const { data: loginData } = useQuery(FETCH_LOGIN_USER);
  const { data: pointData } = useQuery(FETCH_PRODUCTS_ALL);
  const [createPayment] = useMutation(CREATE_PAYMENT);

  const [value, setValue] = useState(0);
  const [productID, setProductID] = useState("");

  const onClickPoint = (el: any) => () => {
    setValue(el.price);
    setProductID(el.id);
  };

  const requestPay = () => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp63093514"); //

    IMP.request_pay(
      {
        pg: "html5_inicis",
        pay_method: "card",
        name: "포인트 충전",
        amount: value,
        buyer_email: loginData?.fetchLoginUser.email,
        buyer_name: loginData?.fetchLoginUser.name,
        buyer_tel: loginData?.fetchLoginUser.phone,
        buyer_addr: "서울특별시 구로구 구로동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/mypage",
      },
      async (rsp: any) => {
        if (rsp.success) {
          try {
            await createPayment({
              variables: {
                createPaymentInput: {
                  impUid: rsp.imp_uid,
                  merchantUid: rsp.merchant_uid,
                  amount: rsp.paid_amount,
                  productID,
                },
              },
              refetchQueries: [
                {
                  query: FETCH_LOGIN_USER,
                },
              ],
            });
            Modal.success({ content: "포인트 충전이 완료되었습니다" });
          } catch (error: any) {
            Modal.error({ content: error.message });
          }
        } else {
          Modal.error({ content: "포인트 충전 실패" });
        }
      }
    );
  };
  return (
    <PointChargePresenter
      pointData={pointData}
      loginData={loginData}
      onClickPoint={onClickPoint}
      value={value}
      requestPay={requestPay}
    />
  );
}
