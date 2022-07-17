import { useMutation, useQuery } from "@apollo/client";
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
  console.log(loginData);
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
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        // merchant_uid(상품 아이디) : 중복되면 안되기 때문에, 주석처리 해주면 자동으로 생성됨!
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
        console.log(rsp);
        if (rsp.success) {
          try {
            const result = await createPayment({
              variables: {
                createPaymentInput: {
                  impUid: rsp.imp_uid,
                  merchantUid: rsp.merchant_uid,
                  amount: rsp.paid_amount,
                  productID,
                },
              },
            });
            console.log(result);
            alert("충전완료");
          } catch (error) {
            console.log(error);
          }
        } else {
          alert("결제 실패");
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
