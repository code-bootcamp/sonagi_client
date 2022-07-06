import * as S from "./RecentWatch.styles";
export default function RecentWatchPresenter() {
  return (
    <S.Wrapper>
      <S.RecentWatch>최근 본 작품</S.RecentWatch>
      <S.Flex>
        <S.Column>
          <S.NovelPic src="../recentWatch/image1.jpg" />
          <S.NovelTitle>작품 이름</S.NovelTitle>
          <S.InnerFlex>
            <S.WriterPic src="../recentWatch/writerpic.JPG" />
            <S.Writer>작가</S.Writer>
          </S.InnerFlex>
        </S.Column>
        <S.Column>
          <S.NovelPic src="../recentWatch/image2.jpg" />
          <S.NovelTitle>작품 이름</S.NovelTitle>
          <S.InnerFlex>
            <S.WriterPic src="../recentWatch/writerpic.JPG" />
            <S.Writer>작가</S.Writer>
          </S.InnerFlex>
        </S.Column>
      </S.Flex>
    </S.Wrapper>
  );
}
