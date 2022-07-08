import Button01 from "../../../commons/buttons/01";
import * as S from "./NoticeDetail.styles";

export default function NoticeDetailPresenter() {
  return (
    <S.Wrap>
      <S.NoticeDetailWrap>
        <S.Title>공지사항</S.Title>
        <S.NoticeDetail>
          <S.NoticeName>작성제목</S.NoticeName>
          <S.WriterWrap>
            <S.WriterName>작성자</S.WriterName>
            <S.WriteAt>2022.00.00</S.WriteAt>
          </S.WriterWrap>
          <S.Line></S.Line>
          <S.contents></S.contents>
          <S.BtnWrap>
            <Button01 title="목록으로" />
          </S.BtnWrap>
        </S.NoticeDetail>
      </S.NoticeDetailWrap>
    </S.Wrap>
  );
}
