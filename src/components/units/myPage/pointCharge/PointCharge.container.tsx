import { useState } from "react";
import PointChargePresenter from "./PointCharge.presenter";

declare const window: typeof globalThis & {
  IMP: any;
};

export default function PointChargeContainer() {
  const Point = [2000, 5000, 10000, 20000, 50000, 100000, 200000];
  const [value, setValue] = useState(0);

  const onClickPoint = (el) => () => {
    setValue(el);
  };

  const requestPay = () => {
    console.log("dd");
    // 3. 결제 준비하기 (init 안에는 가맹점 식별코드 넣어줌)
    const IMP = window.IMP; // 생략 가능
    // IMP.init("imp10159952"); // 예: imp00000000
    IMP.init("imp63093514"); //

    // 4. 결제 요청하기 (결제버튼 클릭 시 PG사의 결제 페이지가 열리게)
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        // merchant_uid(상품 아이디) : 중복되면 안되기 때문에, 주석처리 해주면 자동으로 생성됨!
        name: "포인트 충전",
        amount: value,
        buyer_email: "ee",
        buyer_name: "name",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 구로구 구로동",
        buyer_postcode: "01181",
        // 근데 모바일에서 페이지에 들어간다면 결제 버튼 눌렀을 때 다른페이지로 이동해버림 그래서
        // 6. 모바일 결제가 끝난 뒤 다시 돌아올 페이지 적어주기
        m_redirect_url: "http://localhost:3000/mypage",
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          try {
            // const result = await createPointTransactionOfLoading({
            //   variables: {
            //     impUid: rsp.imp_uid,
            //   },
            // });
            // console.log(result);
            alert("충전완료");
          } catch (error) {
            console.log(error);
          }
        } else {
          // 결제 실패 시 로직,
          alert("결제 실패");
          // ...
        }
      }
    );
  };
  return (
    <PointChargePresenter
      Point={Point}
      onClickPoint={onClickPoint}
      value={value}
      requestPay={requestPay}
    />
  );
}
