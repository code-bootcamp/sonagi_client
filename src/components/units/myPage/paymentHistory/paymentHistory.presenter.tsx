import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./paymentHistory.styles";
export default function PaymentHistoryPresenter(props) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.Top onClick={props.onClickFetchPoint}>충전내역</S.Top>
        <S.Top>후원내역</S.Top>
        <S.Top>결제내역</S.Top>
      </S.TopWrapper>
      {props.isPoint === "LoadingPoint" && (
        <S.ListTitleRow>
          <S.NumberRow>충전일</S.NumberRow>
          <S.TitleRow>결제 ID</S.TitleRow>
          <S.WriterRow>충전내역</S.WriterRow>
          <S.AtRow>충전 후 잔액</S.AtRow>
        </S.ListTitleRow>
      )}
      {props.isPoint === "LoadingPoint" &&
        props.data?.fetchPaymentsInUser.map((el: any, index: any) => (
          <S.ListWrapper key={el.index}>
            <S.ListRow>
              <S.IndexColumn>{getDate(el.createAt)}</S.IndexColumn>
              <S.TitleColumn>{el.impUid}</S.TitleColumn>
              <S.WriterColumn>
                +{el.amount.toLocaleString("ko-KR")}
              </S.WriterColumn>
              <S.AtColumn></S.AtColumn>
            </S.ListRow>
          </S.ListWrapper>
        ))}
    </S.Wrapper>
  );
}
