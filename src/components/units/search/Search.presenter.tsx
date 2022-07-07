import * as S from "./Search.styles";

export default function SearchPresenter() {
  return (
    <S.Wrap>
      <S.SearchInputWrap>
        <S.SearchInput type="search" placeholder="  검색어를 입력하세요!" />
      </S.SearchInputWrap>
      <S.TagWrap>
        <S.Tag>#학원</S.Tag>
        <S.Tag>#로맨스</S.Tag>
        <S.Tag>#판타지</S.Tag>
        <S.Tag>#스릴러</S.Tag>
        <S.Tag>#미스테리</S.Tag>
      </S.TagWrap>
      <S.ItemRowWrap>
        <S.ItemWrap>
          <S.ItemPic src="../novelList/52.png" />
          <S.ItemInfo>
            <S.RowWrap>
              <S.ItemName>Kick off</S.ItemName>
              <S.ItemPlus>10화</S.ItemPlus>
            </S.RowWrap>
            <S.RowWrap>
              <S.WriterIcon src="../novelList/writer-icon.png" />
              <S.Writer>작가명</S.Writer>
            </S.RowWrap>
            <S.Contents>
              소설요약입니다 블라블라 어쩌구저쩌구 아이고하기싫어
            </S.Contents>
          </S.ItemInfo>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.ItemPic src="../novelList/53.png" />
          <S.ItemInfo>
            <S.RowWrap>
              <S.ItemName>Kick off</S.ItemName>
              <S.ItemPlus>10화</S.ItemPlus>
            </S.RowWrap>
            <S.RowWrap>
              <S.WriterIcon src="../novelList/writer-icon.png" />
              <S.Writer>작가명</S.Writer>
            </S.RowWrap>
            <S.Contents>
              소설요약입니다 블라블라 어쩌구저쩌구 아이고하기싫어
            </S.Contents>
          </S.ItemInfo>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.ItemPic src="../novelList/54.png" />
          <S.ItemInfo>
            <S.RowWrap>
              <S.ItemName>Kick off</S.ItemName>
              <S.ItemPlus>10화</S.ItemPlus>
            </S.RowWrap>
            <S.RowWrap>
              <S.WriterIcon src="../novelList/writer-icon.png" />
              <S.Writer>작가명</S.Writer>
            </S.RowWrap>
            <S.Contents>
              소설요약입니다 블라블라 어쩌구저쩌구 아이고하기싫어
            </S.Contents>
          </S.ItemInfo>
        </S.ItemWrap>
        <S.ItemWrap>
          <S.ItemPic src="../novelList/55.png" />
          <S.ItemInfo>
            <S.RowWrap>
              <S.ItemName>Kick off</S.ItemName>
              <S.ItemPlus>10화</S.ItemPlus>
            </S.RowWrap>
            <S.RowWrap>
              <S.WriterIcon src="../novelList/writer-icon.png" />
              <S.Writer>작가명</S.Writer>
            </S.RowWrap>
            <S.Contents>
              소설요약입니다 블라블라 어쩌구저쩌구 아이고하기싫어
            </S.Contents>
          </S.ItemInfo>
        </S.ItemWrap>
      </S.ItemRowWrap>
    </S.Wrap>
  );
}
