import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import MyPagePresenter from "./MyPage.presenter";
import { FETCH_LOGIN_USER } from "./MyPage.queries";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPageContainer() {
  const router = useRouter();
  const [selected, setSelected] = useState(100);
  const [isSelect, setIsSelect] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { data } = useQuery(FETCH_LOGIN_USER);
  console.log("데이터", data);

  const onClickMoveToPaymentCharge = () => {
    router.push("/myPage/paymentHistory");
  };

  const onChangeAmount = (event: any) => {
    setSelected(event.target.value);
  };

  const onClickMoney = (event: any) => {
    setSelected(event.target.value);
    setIsSelect((prev) => !prev);
  };

  const onClickMoveToPointCharge = () => {
    router.push("/myPage/pointCharge");
  };

  const SelectMoney = () => {
    setIsSelect((prev) => !prev);
  };

  const handleOk = () => {
    setIsModalVisible(true);
  };

  const requestpay = (data: any) => {
    setIsModalVisible(false);

    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");

    // 결제하기 화면
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 중복되면 안 됨
        name: "포인트 충전",
        amount: selected,
        buyer_email: "gildong@gmail.com",
        buyer_name: "홍길동",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        // 모바일 환경에서 이곳에 결제 후 이동할 페이지를 이곳에 넣어주기 (모바일에서 결제하면 다른페이지로 이동이 되어서 vs코드의 로직이 적용안됨)
        // m_redirect_url: "http://localhost:3000/quiz/616quizPaySuccessPage",
      },
      (rsp: any) => {
        // callback
        // rsp:응답
        if (rsp.success) {
          console.log(rsp);
          // 결제 성공 시 로직,
          // ...
        } else {
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
    console.log("충전하기 버튼을 누르셨습니다.");
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <MyPagePresenter
        SelectMoney={SelectMoney}
        selected={selected}
        isSelect={isSelect}
        onClickMoney={onClickMoney}
        requestpay={requestpay}
        onChangeAmount={onChangeAmount}
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        onClickMoveToPointCharge={onClickMoveToPointCharge}
        onClickMoveToPaymentCharge={onClickMoveToPaymentCharge}
        data={data}
        // handleCancel={handleCancel}
      />
    </>
  );
}
