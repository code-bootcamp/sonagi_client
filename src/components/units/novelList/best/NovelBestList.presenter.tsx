import * as S from "./NovelBestList.styles";

export default function NovelBestListPresenter(props) {
  return (
    <S.Wrap>
      <S.Title>베스트셀러</S.Title>
      <S.GridWrap>
        {props.itemimg.map((item: any) => (
          <S.ItemWrap key={item.length}>
            <S.RowWrap>
              <S.AwardIcon src="/novelList/best/award.svg" />
              <S.AwardNum>1</S.AwardNum>
              <S.AwardText>위</S.AwardText>
            </S.RowWrap>
            <S.Itembox>
              <S.ItemPic src={`/novelList/best/${item}.png`} />
              <S.TextWrap>
                <S.RowWrap2>
                  <S.ItemName>Kick off</S.ItemName>
                  <S.ItemPickIcon src="/novelList/best/pick.svg" />
                </S.RowWrap2>
                <S.Contents>
                  소설 요약입니다 소설 요약입니다 소설 요약입니다 소설
                  요약입니다 소설 요약입니다 소설 요약입니다소설 요약입니다소설
                  요약입니다
                </S.Contents>
                <S.ItemInfoWrap>
                  <S.ItemStatus>연재</S.ItemStatus>
                  <S.Line></S.Line>
                  <S.Hits>조회수 00</S.Hits>
                  <S.Line></S.Line>
                  <S.WrtiterName>작가명</S.WrtiterName>
                </S.ItemInfoWrap>
              </S.TextWrap>
            </S.Itembox>
          </S.ItemWrap>
        ))}
      </S.GridWrap>
    </S.Wrap>
  );
}
