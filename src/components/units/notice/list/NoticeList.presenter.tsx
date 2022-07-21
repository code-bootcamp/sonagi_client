// import { getDateDay, getDateTime } from "../../../../commons/libraries/utils";
import Button01 from "../../../commons/buttons/01";
import * as S from "./NoticeList.styles";

export default function NoticeListPresenter(props) {
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
        <S.Total>총 6개의 글</S.Total>
        {props.data?.fetchNoticesAll.map((el: any) => (
          <S.NoticeWrap key={el.id}>
            <S.NoticeImg
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            <S.TextWrap>
              <S.TextRowWrap>
                <S.NoticeName>{el.title}</S.NoticeName>
                <S.NoticeTag>NEW</S.NoticeTag>
              </S.TextRowWrap>
              <S.RowWrap2>
                <S.CreatAt>{el.createdAt}</S.CreatAt>
                {/* <S.Ago>{getDateTime(el.createdAt)}</S.Ago> */}
              </S.RowWrap2>
            </S.TextWrap>
          </S.NoticeWrap>
        ))}
        {/* <S.NoticeWrap>
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
        </S.NoticeWrap> */}
      </S.NoticeListWrap>
      <S.RowWrap3 onClick={props.onClickNoticeNew}>
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
