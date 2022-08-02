import { getDateDay } from "../../../../commons/libraries/utils";
// import Button01 from "../../../commons/buttons/01";
import * as S from "./NoticeList.styles";
import { Iel, INoticeListPresenterProps } from "./NoticeList.types";

export default function NoticeListPresenter(props: INoticeListPresenterProps) {
  return (
    <S.Wrap>
      <S.RowWrap>
        <S.NoticeTitleWrap>
          <S.Title>공지사항</S.Title>
          <S.Subtitle>소나기의 공지사항을 알립니다.</S.Subtitle>
        </S.NoticeTitleWrap>
        <S.ImgWrap>
          <S.NoticeIcon src="../notice/notice.png" />
        </S.ImgWrap>
      </S.RowWrap>
      <S.NoticeListWrap>
        <S.Total>총 6 개의 글</S.Total>
        {props.data?.fetchNoticesAll.map((el: Iel) => (
          <S.NoticeWrap key={el.id} onClick={props.onClickNoticedetail}>
            <S.NoticeImg
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            <S.TextWrap>
              <S.TextRowWrap>
                <S.NoticeName>{el.title}</S.NoticeName>
                <S.NoticeTag>NEW</S.NoticeTag>
              </S.TextRowWrap>
              <S.RowWrap2>
                <S.CreatAt>{getDateDay(el.createAt)}</S.CreatAt>
              </S.RowWrap2>
            </S.TextWrap>
          </S.NoticeWrap>
        ))}
      </S.NoticeListWrap>
      <S.RowWrap3 onClick={props.onClickNoticeNew}>
        {/* <Button01 title="공지 작성하기" type="button" /> */}
      </S.RowWrap3>
    </S.Wrap>
  );
}
