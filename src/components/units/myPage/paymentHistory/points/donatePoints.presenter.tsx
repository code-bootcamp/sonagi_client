import { getDate } from "../../../../../commons/libraries/utils";
import * as S from "./Points.styles";

export default function DonatePointsPresenter(props) {
  return (
    <>
      <S.ListTitleRow>
        <S.NumberRow>결제일</S.NumberRow>
        <S.TitleRow>작가 등급</S.TitleRow>
        <S.WriterRow>후원 금액</S.WriterRow>
        <S.AtRow>작가 닉네임</S.AtRow>
      </S.ListTitleRow>
      {props.DonateData?.fetchDonatePoints
        .slice(0)
        .reverse()
        .map((el: any) => (
          <S.ListWrapper key={el.id}>
            <S.ListRow>
              <S.IndexColumn>{getDate(el.createAt)}</S.IndexColumn>
              <S.TitleColumn>{el.novel?.user.userClass.id}</S.TitleColumn>
              <S.WriterColumn>
                {el.point.toLocaleString("ko-KR")} 원
              </S.WriterColumn>
              <S.AtColumn>{el.novel?.user.nickName}</S.AtColumn>
            </S.ListRow>
          </S.ListWrapper>
        ))}
    </>
  );
}
