import DOMPurify from "dompurify";
import * as S from "./NovelList.styles";

export default function NovelEndListPresenter(props: any) {
  console.log(props.data);
  return (
    <S.Wrap>
      <S.Title>완결작품</S.Title>
      {/* sf */}
      <S.RowWrap>
        <S.Category>SF</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.data?.fetchNovelsPage.slice(0, 5).map((el: any) => (
            <S.ItemWrap key={el.id}>
              <S.ItemPic src={"/novelList/13.png"} />
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
      </S.ColumnWrap>
      {/* 로맨스판타지 */}
      <S.RowWrap>
        <S.Category>로맨스판타지</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.data?.fetchNovelsPage.slice(0, 5).map((el: any) => (
            <S.ItemWrap key={el.id}>
              <S.ItemPic src={"/novelList/33.png"} />
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
      </S.ColumnWrap>
      {/* 로맨스 */}
      <S.RowWrap>
        <S.Category>로맨스</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.data?.fetchNovelsPage.slice(0, 5).map((el: any) => (
            <S.ItemWrap key={el.id}>
              <S.ItemPic src={"/novelList/32.png"} />
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
      </S.ColumnWrap>
      {/* 판타지 */}
      <S.RowWrap>
        <S.Category>판타지</S.Category>
        <S.Arrow src="/novelList/arrowend/.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.data?.fetchNovelsPage.slice(0, 5).map((el: any) => (
            <S.ItemWrap key={el.id}>
              <S.ItemPic src={"/novelList/45.png"} />
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
      </S.ColumnWrap>
      {/* 학원 */}
      <S.RowWrap>
        <S.Category>학원</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.data?.fetchNovelsPage.slice(0, 5).map((el: any) => (
            <S.ItemWrap key={el.id}>
              <S.ItemPic src={"/novelList/52.png"} />
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
      </S.ColumnWrap>
      {/* 공포/미스터리 */}
      <S.RowWrap>
        <S.Category>공포/미스터리</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.data?.fetchNovelsPage.slice(0, 5).map((el: any) => (
            <S.ItemWrap key={el.id}>
              {/* <S.ItemPic src={"/novelList/62.png"} /> */}
              <S.ItemPic
                src={
                  el.files.url
                    ? `https://storage.googleapis.com/${el.files.url}`
                    : "/novelList/62.png"
                }
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
      </S.ColumnWrap>
    </S.Wrap>
  );
}
