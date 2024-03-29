import DOMPurify from "dompurify";
import * as S from "./RomanceFantasy.styles";
import { IRomanceFantasyPresenterProps } from "./RomanceFantasy.types";

export default function RomanceFantasyPresenter(
  props: IRomanceFantasyPresenterProps
) {
  return (
    <S.Wrap>
      <S.Title>로맨스판타지</S.Title>
      {/* 연재중 */}
      <S.RowWrap>
        <S.Category>연재작품</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.PbRomanceFantasy?.fetchNovelsPage?.novels.map((el: any) => (
          <S.ItemWrap
            onClick={props.onClickMoveToDetail(el)}
            id={el.id}
            key={el.title}
          >
            <S.ItemPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            <S.ItemInfo>
              <S.ItemName>{el.title}</S.ItemName>
              {el.cycle === 0 ? (
                <S.Cycle>자유연재</S.Cycle>
              ) : (
                <S.Cycle>요일연재</S.Cycle>
              )}
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
        {props.FinRomanceFantasy?.fetchNovelsPage?.novels
          .slice(0, 5)
          .map((el: any) => (
            <S.ItemWrap
              onClick={props.onClickMoveToDetail(el)}
              id={el.id}
              key={el.title}
            >
              <S.ItemPic
                src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
              />
              <S.ItemInfo>
                <S.ItemName>{el.title}</S.ItemName>
                {el.cycle === 0 ? (
                  <S.Cycle>자유연재</S.Cycle>
                ) : (
                  <S.Cycle>요일연재</S.Cycle>
                )}
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
