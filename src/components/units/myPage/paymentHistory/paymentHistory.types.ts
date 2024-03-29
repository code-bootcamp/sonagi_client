export interface IPaymentHistoryPresenterProps {
  DonateData: any;
  PaidData: any;
  CancelData: any;
  setIsModalVisible: any;
  isModalVisible: any;
  data: any;
  isPoint: string;
  onClickFetchPoint: () => void;
  onClickFetchPaidPoint: () => void;
  onClickFetchDonatePoint: () => void;
  onClickCancelPayment: () => void;
  onClickCheck: any;
}

export interface IDonatePointsPresenterProps {
  DonateData: any;
}

export interface IPaidPointsPresenterProps {
  PaidData: any;
}
