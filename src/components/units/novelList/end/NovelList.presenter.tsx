import DOMPurify from "dompurify";
import * as S from "./NovelList.styles";

export default function NovelEndListPresenter(props: any) {
  console.log(props.data);
  return (
    <S.Wrap>
      <S.Title>완결작품</S.Title>
      {/* 로맨스 */}
      <S.RowWrap>
        <S.Category>로맨스</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.data?.fetchNovelFinsPageLastOrder.novels
          .slice(0, 5)
          .map((el: any) => (
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
      {/* 로맨스판타지 */}
      <S.RowWrap>
        <S.Category>로맨스판타지</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.data?.fetchNovelFinsPageLastOrder.novels
          .slice(0, 5)
          .map((el: any) => (
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
      {/* 판타지 */}
      <S.RowWrap>
        <S.Category>판타지</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.data?.fetchNovelFinsPageLastOrder.novels
          .slice(0, 5)
          .map((el: any) => (
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
      {/* 무협 */}
      <S.RowWrap>
        <S.Category>무협</S.Category>
        <S.Arrow src="/novelList/arrowend/.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.data?.fetchNovelFinsPageLastOrder.novels
          .slice(0, 5)
          .map((el: any) => (
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
      {/* 학원 */}
      <S.RowWrap>
        <S.Category>학원</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.data?.fetchNovelFinsPageLastOrder.novels
          .slice(0, 5)
          .map((el: any) => (
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
      {/* 공포/미스터리 */}
      <S.RowWrap>
        <S.Category>공포/미스터리</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.GridWrap>
        {props.data?.fetchNovelFinsPageLastOrder.novels
          .slice(0, 5)
          .map((el: any) => (
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
