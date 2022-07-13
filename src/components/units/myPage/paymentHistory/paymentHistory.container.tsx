import { useQuery } from "@apollo/client";
import { useState } from "react";
import PaymentHistoryPresenter from "./paymentHistory.presenter";
import { FETCH_PAYMENTS } from "./paymentHistory.queries";

export default function PaymentHistoryContainer() {
  const { data } = useQuery(FETCH_PAYMENTS);
  const [isPoint, setIsPoint] = useState("LoadingPoint");

  const onClickFetchPoint = () => {
    setIsPoint("LoadingPoint");
  };

  return (
    <PaymentHistoryPresenter
      isPoint={isPoint}
      data={data}
      onClickFetchPoint={onClickFetchPoint}
    />
  );
}
