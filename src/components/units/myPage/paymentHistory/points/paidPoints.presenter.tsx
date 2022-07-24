import { getDate } from "../../../../../commons/libraries/utils";
import { IPaidPointsPresenterProps } from "../paymentHistory.types";
import * as S from "./Points.styles";

export default function PaidPointsPresenter(props: IPaidPointsPresenterProps) {
  return (
    <>
      <S.ListTitleRow>
        <S.NumberRow>결제일</S.NumberRow>
        <S.TitleRow>소설 제목</S.TitleRow>
        <S.WriterRow>결제 금액</S.WriterRow>
        <S.AtRow>작가 닉네임</S.AtRow>
      </S.ListTitleRow>
      {props.PaidData?.fetchPaidPoints
        .slice(0)
        .reverse()
        .map((el: any) => (
          <S.ListWrapper key={el.id}>
            <S.ListRow>
              <S.IndexColumn>{getDate(el.createAt)}</S.IndexColumn>
              <S.TitleColumn>{el.novelIndex?.title}</S.TitleColumn>
              <S.WriterColumn>
                {el.point.toLocaleString("ko-KR")} 원
              </S.WriterColumn>
              <S.AtColumn>{el.novelIndex?.user.nickName}</S.AtColumn>
            </S.ListRow>
          </S.ListWrapper>
        ))}
    </>
  );
}
