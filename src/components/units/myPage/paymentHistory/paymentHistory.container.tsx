import { useQuery } from "@apollo/client";
import { useState } from "react";
import PaymentHistoryPresenter from "./paymentHistory.presenter";
import { FETCH_PAYMENTS } from "./paymentHistory.queries";

export default function PaymentHistoryContainer() {
  const { data } = useQuery(FETCH_PAYMENTS);
  const [isPoint, setIsPoint] = useState("LoadingPoint");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [CancelData, setCancelData] = useState([]);

  console.log(data);

  const onClickFetchPoint = () => {
    setIsPoint("LoadingPoint");
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
      onClickFetchPoint={onClickFetchPoint}
      onClickCancelPayment={onClickCancelPayment}
      isModalVisible={isModalVisible}
      setIsModalVisible={setIsModalVisible}
      onClickCheck={onClickCheck}
      CancelData={CancelData}
    />
  );
}
