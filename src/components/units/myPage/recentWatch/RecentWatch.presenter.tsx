import * as S from "./RecentWatch.styles";
export default function RecentWatchPresenter() {
  return (
    <S.Wrapper>
      <S.MyPageFont>마이 페이지</S.MyPageFont>
      <S.RecentWatch>최근 본 작품</S.RecentWatch>
      <S.Wrap>
        <S.Flex>
          <S.NovelPic src="../recentWatch/21.png" />
          <S.NovelPic src="../recentWatch/22.png" />
          <S.NovelPic src="../recentWatch/23.png" />
          <S.NovelPic src="../recentWatch/24.png" />
        </S.Flex>
        <S.BookShelf src="/recentWatch/shelf.png" />
      </S.Wrap>
      <S.Wrap>
        <S.Flex2>
          <S.NovelPic src="../recentWatch/31.png" />
          <S.NovelPic src="../recentWatch/32.png" />
          <S.NovelPic src="../recentWatch/33.png" />
          <S.NovelPic src="../recentWatch/34.png" />
        </S.Flex2>
        <S.BookShelf2 src="/recentWatch/shelf.png" />
      </S.Wrap>
    </S.Wrapper>
  );
}

// {/* <S.Wrapper>
//       <S.MyPageFont>마이 페이지</S.MyPageFont>
//       <S.RecentWatch>최근 본 작품</S.RecentWatch>
//       <S.Flex>
//         <S.Column>
//           <S.NovelPic src="../recentWatch/image1.jpg" />
//           {/* <S.NovelTitle>소설 제목</S.NovelTitle>
//           <S.InnerFlex>
//             <S.WriterPic src="../recentWatch/writerpic.JPG" />
//             <S.Writer>작가이름</S.Writer>
//           </S.InnerFlex> */}
//         </S.Column>
//         <S.Column>
//           <S.NovelPic src="../recentWatch/image2.jpg" />
//           {/* <S.NovelTitle>소설 제목</S.NovelTitle>
//           <S.InnerFlex>
//             <S.WriterPic src="../recentWatch/writerpic.JPG" />
//             <S.Writer>작가이름</S.Writer>
//           </S.InnerFlex> */}
//         </S.Column>
//       </S.Flex>
//       <S.BookShelf src="/recentWatch/shelf.png" />
//     </S.Wrapper> */}
