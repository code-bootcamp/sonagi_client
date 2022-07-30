import * as S from "./NovelList.styles";
import DOMPurify from "dompurify";
import { INovelPbListUIProps } from "./NovelList.types";

export default function NovelPbListPresenter(props: INovelPbListUIProps) {
  return (
    <S.Wrap>
      <S.Title>연재작품</S.Title>
      <S.RowWrap>
        <S.Category onClick={props.onClickMoveToRomancePage}>로맨스</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.Romance?.fetchNovelsPage?.novels.slice(0, 5).map((el: any) => (
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
      {/* 로맨스판타지 */}
      <S.RowWrap>
        <S.Category onClick={props.onClickMoveToRomanceFantasyPage}>
          로맨스판타지
        </S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.RomanceFantasy?.fetchNovelsPage.novels
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
      <S.Line></S.Line>
      {/* 판타지 */}
      <S.RowWrap>
        <S.Category onClick={props.onClickMoveToFantasyPage}>판타지</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.Fantasy?.fetchNovelsPage.novels.slice(0, 5).map((el: any) => (
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
      {/* 무협 */}
      <S.RowWrap>
        <S.Category onClick={props.onClickMoveToAsiaPage}>무협</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.Asia?.fetchNovelsPage.novels.slice(0, 5).map((el: any) => (
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
      {/* 학원 */}
      <S.RowWrap>
        <S.Category onClick={props.onClickMoveToSchoolPage}>학원</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.School?.fetchNovelsPage.novels.slice(0, 5).map((el: any) => (
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
      {/* 공포/미스터리 */}
      <S.RowWrap>
        <S.Category onClick={props.onClickMoveToHorrorPage}>
          공포/미스터리
        </S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.Horror?.fetchNovelsPage.novels.slice(0, 5).map((el: any) => (
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
