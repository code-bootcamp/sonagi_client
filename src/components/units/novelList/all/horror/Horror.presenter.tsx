import DOMPurify from "dompurify";
import * as S from "./Horror.styles";
import { IHorrorPresenterProps } from "./Horror.types";

export default function HorrorPresenter(props: IHorrorPresenterProps) {
  return (
    <S.Wrap>
      <S.Title>공포/미스터리</S.Title>
      {/* 연재중 */}
      <S.RowWrap>
        <S.Category>연재작품</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.PbHorror?.fetchNovelsPage?.novels.map((el: any) => (
          <S.ItemWrap
            onClick={props.onClickMoveToDetail}
            id={el.id}
            key={el.title}
          >
            <S.ItemPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            <S.ItemInfo>
              <S.ItemName>{el.title}</S.ItemName>
              <S.ItemNum>10화</S.ItemNum>
            </S.ItemInfo>
            <S.ItemWriterWrap>
              <S.WriterIcon src="/novelList/writer-icon.png" />
              <S.WrtiterName>{el.user?.nickName}</S.WrtiterName>
            </S.ItemWriterWrap>
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(el.description),
              }}
            ></S.Contents>
          </S.ItemWrap>
        ))}
      </S.GridWrap>
      <S.Line></S.Line>
      {/* 완결작 */}
      <S.RowWrap>
        <S.Category>완결작품</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.FinHorror?.fetchNovelsPage?.novels.map((el: any) => (
          <S.ItemWrap
            onClick={props.onClickMoveToDetail}
            id={el.id}
            key={el.title}
          >
            <S.ItemPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            <S.ItemInfo>
              <S.ItemName>{el.title}</S.ItemName>
              <S.ItemNum>10화</S.ItemNum>
            </S.ItemInfo>
            <S.ItemWriterWrap>
              <S.WriterIcon src="/novelList/writer-icon.png" />
              <S.WrtiterName>{el.user?.nickName}</S.WrtiterName>
            </S.ItemWriterWrap>
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(el.description),
              }}
            ></S.Contents>
          </S.ItemWrap>
        ))}
      </S.GridWrap>
    </S.Wrap>
  );
}
