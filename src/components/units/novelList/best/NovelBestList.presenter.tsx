import * as S from "./NovelBestList.styles";

export default function NovelBestListPresenter(props) {
  return (
    <S.Wrap>
      <S.Title>베스트셀러</S.Title>
      <S.GridWrap>
        {props.itemimg.map((item: any) => (
          <S.ItemWrap key={item.length}>
            <S.ItemPic src={`/novelList/best/${item}.png`} />
            <S.ItemInfo>
              <S.ItemName>Kick off</S.ItemName>
              <S.ItemNum>10화</S.ItemNum>
            </S.ItemInfo>
            <S.ItemWriterWrap>
              <S.WriterIcon src="/novelList/writer-icon.png" />
              <S.WrtiterName>작가명</S.WrtiterName>
            </S.ItemWriterWrap>
            <S.Contents>소설 회차 부제목입니다~</S.Contents>
          </S.ItemWrap>
        ))}
      </S.GridWrap>
    </S.Wrap>
  );
}
