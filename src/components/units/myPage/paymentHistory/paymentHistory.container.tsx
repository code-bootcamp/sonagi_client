import { useQuery } from "@apollo/client";
import { useState } from "react";
import PaymentHistoryPresenter from "./paymentHistory.presenter";
import {
  FETCH_DONATE_POINTS,
  FETCH_PAID_POINTS,
  FETCH_PAYMENTS,
} from "./paymentHistory.queries";

export default function PaymentHistoryContainer() {
  const { data } = useQuery(FETCH_PAYMENTS, { variables: { page: 1 } });
  const { data: PaidData } = useQuery(FETCH_PAID_POINTS, {
    variables: { page: 1 },
  });
  const { data: DonateData } = useQuery(FETCH_DONATE_POINTS, {
    variables: { page: 1 },
  });

  const [isPoint, setIsPoint] = useState("LoadingPoint");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [CancelData, setCancelData] = useState([]);

  console.log("결제한거1", data);
  console.log("결제한거2", PaidData);
  console.log("결제한거3", DonateData);

  const onClickFetchPoint = () => {
    setIsPoint("LoadingPoint");
  };

  const onClickFetchPaidPoint = () => {
    setIsPoint("PaidPoint");
  };

  const onClickFetchDonatePoint = () => {
    setIsPoint("DonatePoint");
  };

  const onClickCancelPayment = () => {
    setIsModalVisible(true);
  };

  const onClickCheck = (el) => () => {
    setCancelData(el);
  };

  return (
    <PaymentHistoryPresenter
      isPoint={isPoint}
      data={data}
      PaidData={PaidData}
      DonateData={DonateData}
      onClickFetchPoint={onClickFetchPoint}
      onClickCancelPayment={onClickCancelPayment}
      onClickFetchPaidPoint={onClickFetchPaidPoint}
      onClickFetchDonatePoint={onClickFetchDonatePoint}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onClickCheck={onClickCheck}
      CancelData={CancelData}
    />
  );
}
