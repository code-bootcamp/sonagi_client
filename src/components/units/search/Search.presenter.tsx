import * as S from "./Search.styles";

export default function SearchPresenter() {
  const itemimg = [
    11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44,
    45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65,
  ];

  return (
    <S.Wrap>
      <S.Title>최신작품</S.Title>
      <S.MoreBtn>더보기</S.MoreBtn>
      <S.GridWrap>
        {itemimg.map((item: any) => (
          <S.ItemWrap key={item.length}>
            <S.ItemPic src={`/search/${item}.png`} />
            <S.ItemInfo>
              <S.ItemName>Kick off</S.ItemName>
              <S.ItemNum>10화</S.ItemNum>
            </S.ItemInfo>
            <S.ItemWriterWrap>
              <S.WriterIcon src="../search/writer-icon.png" />
              <S.WrtiterName>작가명</S.WrtiterName>
            </S.ItemWriterWrap>
            <S.Contents>소설 회차 부제목입니다~</S.Contents>
          </S.ItemWrap>
        ))}
      </S.GridWrap>
    </S.Wrap>
  );
}
