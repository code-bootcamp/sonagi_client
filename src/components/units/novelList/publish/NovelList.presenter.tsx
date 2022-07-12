import * as S from "./NovelList.styles";

export default function NovelPbListPresenter(props: any) {
  return (
    <S.Wrap>
      <S.Title>연재작품</S.Title>
      {/* sf */}
      <S.RowWrap>
        <S.Category>SF</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.sfPbItem.map((item: any) => (
            <S.ItemWrap key={item.length}>
              <S.ItemPic src={`/novelList/${item}.png`} />
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
      </S.ColumnWrap>
      {/* 로맨스판타지 */}
      <S.RowWrap>
        <S.Category>로맨스판타지</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.romanceFantasyPbItem.map((item: any) => (
            <S.ItemWrap key={item.length}>
              <S.ItemPic src={`/novelList/${item}.png`} />
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
      </S.ColumnWrap>
      {/* 로맨스 */}
      <S.RowWrap>
        <S.Category>로맨스</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.romancaPbItem.map((item: any) => (
            <S.ItemWrap key={item.length}>
              <S.ItemPic src={`/novelList/${item}.png`} />
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
      </S.ColumnWrap>
      {/* 판타지 */}
      <S.RowWrap>
        <S.Category>판타지</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.FantasyPbItem.map((item: any) => (
            <S.ItemWrap key={item.length}>
              <S.ItemPic src={`/novelList/${item}.png`} />
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
      </S.ColumnWrap>
      {/* 학원 */}
      <S.RowWrap>
        <S.Category>학원</S.Category>
        <S.Arrow src="/novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.teenagePbItem.map((item: any) => (
            <S.ItemWrap key={item.length}>
              <S.ItemPic src={`/novelList/${item}.png`} />
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
      </S.ColumnWrap>
      {/* 공포/미스터리 */}
      <S.RowWrap>
        <S.Category>공포/미스터리</S.Category>
        <S.Arrow src="../novelList/arrow.png" />
      </S.RowWrap>
      <S.ColumnWrap>
        <S.GridWrap>
          {props.horrorPbItem.map((item: any) => (
            <S.ItemWrap key={item.length}>
              <S.ItemPic src={`/novelList/${item}.png`} />
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
      </S.ColumnWrap>
    </S.Wrap>
  );
}