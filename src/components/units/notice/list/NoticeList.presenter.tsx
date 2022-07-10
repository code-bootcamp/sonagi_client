import Button01 from "../../../commons/buttons/01";
import * as S from "./NoticeList.styles";

export default function NoticeListPresenter() {
  return (
    <S.Wrap>
      <S.RowWrap>
        <S.NoticeTitleWrap>
          <S.Title>공지사항</S.Title>
          <S.Subtitle>소나기의 공지사항을 알립니다.</S.Subtitle>
        </S.NoticeTitleWrap>
        <S.NoticeIcon src="../notice/notice.png" />
      </S.RowWrap>
      <S.NoticeListWrap>
        <S.Total>총 000개의 글</S.Total>
        <S.NoticeWrap>
          <S.NoticeImg />
          <S.TextWrap>
            <S.TextRowWrap>
              <S.NoticeName>공지사항 제목입니다.</S.NoticeName>
              <S.NoticeTag>NEW</S.NoticeTag>
            </S.TextRowWrap>
            <S.RowWrap2>
              <S.CreatAt>2022.00.00 00:00</S.CreatAt>
              <S.Ago>2시간 전</S.Ago>
            </S.RowWrap2>
          </S.TextWrap>
        </S.NoticeWrap>
        <S.NoticeWrap>
          <S.NoticeImg />
          <S.TextWrap>
            <S.TextRowWrap>
              <S.NoticeName>공지사항 제목입니다.</S.NoticeName>
              <S.NoticeTag>NEW</S.NoticeTag>
            </S.TextRowWrap>
            <S.RowWrap2>
              <S.CreatAt>2022.00.00 00:00</S.CreatAt>
              <S.Ago>5시간 전</S.Ago>
            </S.RowWrap2>
          </S.TextWrap>
        </S.NoticeWrap>
        <S.NoticeWrap>
          <S.NoticeImg />
          <S.TextWrap>
            <S.TextRowWrap>
              <S.NoticeName>공지사항 제목입니다.</S.NoticeName>
            </S.TextRowWrap>
            <S.RowWrap2>
              <S.CreatAt>2022.00.00 00:00</S.CreatAt>
              <S.Ago>2일 전</S.Ago>
            </S.RowWrap2>
          </S.TextWrap>
        </S.NoticeWrap>
        <S.NoticeWrap>
          <S.NoticeImg />
          <S.TextWrap>
            <S.TextRowWrap>
              <S.NoticeName>공지사항 제목입니다.</S.NoticeName>
            </S.TextRowWrap>
            <S.RowWrap2>
              <S.CreatAt>2022.00.00 00:00</S.CreatAt>
              <S.Ago>2일 전</S.Ago>
            </S.RowWrap2>
          </S.TextWrap>
        </S.NoticeWrap>
      </S.NoticeListWrap>
      <S.RowWrap3>
        <Button01 title="공지 작성하기" />
      </S.RowWrap3>
      <S.RowWrap4>
        <S.Arrow src="../notice/leftArrow.svg" />
        <S.PageNum>
          <S.Page>1</S.Page>
          <S.Page>2</S.Page>
          <S.Page>3</S.Page>
          <S.Page>4</S.Page>
          <S.Page>5</S.Page>
        </S.PageNum>
        <S.Arrow src="../notice/rightArrow.svg" />
      </S.RowWrap4>
    </S.Wrap>
  );
}
