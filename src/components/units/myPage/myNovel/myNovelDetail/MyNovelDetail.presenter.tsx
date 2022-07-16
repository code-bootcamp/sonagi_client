import * as S from "../MyNovel.styles";
export default function MyNovelDetailPresenter(props) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.MyNovel>나의 작품</S.MyNovel>
      </S.TopWrapper>
      {/* {props.myNovel ? <div></div> : <div></div>} */}
      {props.data?.fetchMyNovels.novels.map((el) => (
        <S.BoxWrapper key={el.id}>
          {/* <S.ImageWrapper>
            <S.Img
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0].url}`}
            />
          </S.ImageWrapper> */}
          <S.InnerFlex>
            <S.Column>
              <S.GenreFlex>
                <S.Genre>{el.index}화</S.Genre>
                <S.Time>{el.title}</S.Time>
              </S.GenreFlex>
            </S.Column>
            <S.BoxFlex>
              <S.Button1>연재하기</S.Button1>
              <S.Button1>공지사항</S.Button1>
            </S.BoxFlex>
          </S.InnerFlex>
        </S.BoxWrapper>
      ))}
    </S.Wrapper>
  );
}
