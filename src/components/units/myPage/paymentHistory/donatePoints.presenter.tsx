import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./paymentHistory.styles";

export default function DonatePointsPresenter(props) {
  return (
    <>
      <S.ListTitleRow>
        <S.NumberRow>결제일</S.NumberRow>
        <S.TitleRow>결제 ID</S.TitleRow>
        <S.WriterRow>후원내역</S.WriterRow>
        <S.AtRow>결제 제목</S.AtRow>
      </S.ListTitleRow>
      {props.PaidData?.fetchPaidPoints.map((el: any, index: any) => (
        <S.ListWrapper key={el.index}>
          <S.ListRow>
            <S.IndexColumn>{getDate(el.createAt)}</S.IndexColumn>
            <S.TitleColumn>{el.id}</S.TitleColumn>
            <S.WriterColumn>+{el.point.toLocaleString("ko-KR")}</S.WriterColumn>
            <S.AtColumn>{el.novel.title}</S.AtColumn>
          </S.ListRow>
        </S.ListWrapper>
      ))}
    </>
  );
}
