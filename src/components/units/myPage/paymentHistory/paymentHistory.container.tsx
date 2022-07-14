import { useQuery } from "@apollo/client";
import { useState } from "react";
import PaymentHistoryPresenter from "./paymentHistory.presenter";
import { FETCH_PAYMENTS } from "./paymentHistory.queries";

export default function PaymentHistoryContainer() {
  const { data } = useQuery(FETCH_PAYMENTS);
  const [isPoint, setIsPoint] = useState("LoadingPoint");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClickFetchPoint = () => {
    setIsPoint("LoadingPoint");
  };

  const onClickCancelPayment = () => {
    setIsModalVisible(true);
  };

  return (
    <PaymentHistoryPresenter
      isPoint={isPoint}
      data={data}
      onClickFetchPoint={onClickFetchPoint}
      onClickCancelPayment={onClickCancelPayment}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
    />
  );
}
