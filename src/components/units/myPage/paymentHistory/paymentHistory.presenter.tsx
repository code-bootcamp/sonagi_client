import { getDate } from "../../../../commons/libraries/utils";
import PaymentPage from "../../../commons/modal/cancelPayments";
import PaidPointsPresenter from "./points/paidPoints.presenter";
import * as S from "./paymentHistory.styles";
import DonatePointsPresenter from "./points/donatePoints.presenter";
import HamburgerPage from "../../../commons/hamburger";
import { IPaymentHistoryPresenterProps } from "./paymentHistory.types";
export default function PaymentHistoryPresenter(
  props: IPaymentHistoryPresenterProps
) {
  return (
    <S.Wrapper>
      <S.HamburgerWrapper>
        <HamburgerPage />
      </S.HamburgerWrapper>
      <S.TopWrapper>
        <S.Top onClick={props.onClickFetchPoint}>충전내역</S.Top>
        <S.Top onClick={props.onClickFetchPaidPoint}>결제내역</S.Top>
        <S.Top onClick={props.onClickFetchDonatePoint}>후원내역</S.Top>
      </S.TopWrapper>
      {props.isPoint === "LoadingPoint" && (
        <S.ListTitleRow>
          <S.Check></S.Check>
          <S.NumberRow>충전일</S.NumberRow>
          <S.TitleRow>결제 ID</S.TitleRow>
          <S.WriterRow>충전내역</S.WriterRow>
          <S.AtRow>충전 후 잔액</S.AtRow>
        </S.ListTitleRow>
      )}
      {props.isPoint === "LoadingPoint" &&
        props.data?.fetchPaymentsInUser.payments
          .slice(0)
          .reverse()
          .map((el: any, index: any) => (
            <S.ListWrapper key={el.index}>
              <S.ListRow>
                {String(el.amount).includes("-") ? (
                  <S.CheckColumn
                    type="radio"
                    name="check"
                    disabled
                  ></S.CheckColumn>
                ) : (
                  <S.CheckColumn
                    type="radio"
                    name="check"
                    onClick={props.onClickCheck(el)}
                  ></S.CheckColumn>
                )}
                <S.IndexColumn>{getDate(el.createAt)}</S.IndexColumn>
                <S.TitleColumn>{el.impUid}</S.TitleColumn>
                {String(el.amount).includes("-") ? (
                  <S.WriterColumn>
                    {el.amount.toLocaleString("ko-KR")}
                  </S.WriterColumn>
                ) : (
                  <S.WriterColumn>
                    +{el.amount.toLocaleString("ko-KR")}
                  </S.WriterColumn>
                )}
                <S.AtColumn></S.AtColumn>
              </S.ListRow>
            </S.ListWrapper>
          ))}
      {props.isPoint === "LoadingPoint" && (
        <S.ButtonWrapper>
          <S.CancelButton onClick={props.onClickCancelPayment}>
            포인트 환불
          </S.CancelButton>
          {props.isModalVisible && (
            <PaymentPage
              setIsModalVisible={props.setIsModalVisible}
              CancelData={props.CancelData}
            />
          )}
        </S.ButtonWrapper>
      )}
      {props.isPoint === "PaidPoint" && (
        <PaidPointsPresenter PaidData={props.PaidData} />
      )}
      {props.isPoint === "DonatePoint" && (
        <DonatePointsPresenter DonateData={props.DonateData} />
      )}
    </S.Wrapper>
  );
}
