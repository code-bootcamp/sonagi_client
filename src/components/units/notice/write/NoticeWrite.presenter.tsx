import Button01 from "../../../commons/buttons/01";
import * as S from "./NoticeWrite.styles";

export default function NoticeWritePresenter() {
  return (
    <S.Wrap>
      <S.NoticeDetailWrap>
        <S.RowWrap>
          <S.Title>공지사항</S.Title>
          <S.TitleLine></S.TitleLine>
        </S.RowWrap>
        <S.NoticeDetail>
          <S.RowWrap>
            <S.NoticeName>작성 제목</S.NoticeName>
            <S.NameInput placeholder="ex) [공지]개인정보 처리방침 개정 안내" />
          </S.RowWrap>
          <S.WriterWrap>
            <S.WriterName>관리자</S.WriterName>
            <S.WriteAt>2022.00.00</S.WriteAt>
          </S.WriterWrap>
          <S.Line></S.Line>
          <S.contents placeholder="내용을 입력해 주세요" />
          <S.BtnWrap>
            <Button01 title="목록으로" />
            <Button01 title="수정하기" />
            <Button01 title="삭제하기" />
          </S.BtnWrap>
        </S.NoticeDetail>
      </S.NoticeDetailWrap>
    </S.Wrap>
  );
}
