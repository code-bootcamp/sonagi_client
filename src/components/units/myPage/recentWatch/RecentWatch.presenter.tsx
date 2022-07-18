import * as S from "./RecentWatch.styles";
export default function RecentWatchPresenter(props) {
  return (
    <S.Wrapper>
      <S.MyPageFont>마이 페이지</S.MyPageFont>
      <S.RecentWatch>최근 본 작품</S.RecentWatch>
      <S.Flex>
        {props.basketItems?.slice(0, 5).map((el) => (
          <S.BoxWrap
            key={el.id}
            id={el.id}
            onClick={props.onClickMoveToNovelDetail}
          >
            <S.NovelPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            {/* <S.Title>{el.title}</S.Title> */}
          </S.BoxWrap>
        ))}
      </S.Flex>
      <S.BookShelf src="/recentWatch/shelf.png" />
      <S.Flex>
        {props.basketItems?.map((el) => (
          <S.BoxWrap
            key={el.id}
            id={el.id}
            onClick={props.onClickMoveToNovelDetail}
          >
            <S.NovelPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            {/* <S.Title>{el.title}</S.Title> */}
          </S.BoxWrap>
        ))}
      </S.Flex>
      <S.BookShelf src="/recentWatch/shelf.png" />
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
