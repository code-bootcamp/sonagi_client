import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { withAuth } from "../../../commons/hooks/withAuth";
import MyPagePresenter from "./MyPage.presenter";

function MyPageContainer() {
  const router = useRouter();
  const [selected, setSelected] = useState(100);
  const [isSelect, setIsSelect] = useState(false);
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
        selected={selected}
        isSelect={isSelect}
        onClickMoney={onClickMoney}
        onChangeAmount={onChangeAmount}
        onClickMoveToPointCharge={onClickMoveToPointCharge}
        // handleCancel={handleCancel}
      />
    </>
  );
}

export default withAuth(MyPageContainer);
