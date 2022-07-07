import Head from "next/head";
// import { useRouter } from "next/router";
// import { useState } from "react";
import MyPagePresenter from "./MyPage.presenter";
declare const window: typeof globalThis & {
  IMP: any;
};

export default function MyPageContainer() {
  // const router = useRouter();
  // const [selected, setSelected] = useState(100);
  const requestpay = (data: any) => {
    const IMP = window.IMP; // 생략 가능
    IMP.init("imp49910675");

    // 결제하기 화면
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        // 가상계좌 하고싶으면 "vbank"
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011", // 중복되면 안 됨
        name: "포인트 충전하기",
        // amount: Number(data.price?.replace("원", "").replace(",", "")),
        // amount: selected,
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
          // router.push("/quiz/616quizPaySuccessPage");
          // ...,
          // 결제 성공 시 로직,
          // ...
          //   백엔드에 결제관련 데이터 넘겨주기(=> 즉, 뮤테이션 실행하기)
          // ex, createPointTransactionOfLoading _ api!!!!!!
          //   new Date() 하면 내 컴퓨터의 시간을 대상으로 띄워줌. 그런데 타인의 컴퓨터 시간은 다르게 설정되어 있을것임(시간 설정을 다르게 하는 등..)
          //   new Date()는 프론트에서 하지 않는다....
          // createPointTransactionOfLoading({
          //   variables: {
          //     impUid: String(rsp.imp_uid),
          //   },
          // });
          // router.push("/");

          // location.reload();
        } else {
          // ...,
          // 결제 실패 시 로직,
          // ...
          alert("결제에 실패했습니다. 다시 시도해주세요.");
        }
      }
    );
  };
  return (
    <>
      <MyPagePresenter requestpay={requestpay} />
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
    </>
  );
}
