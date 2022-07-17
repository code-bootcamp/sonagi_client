import * as S from "./LikeNovel.styles";

export default function LikeNovelPresenter(props) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.LikeNovel>찜한 작품</S.LikeNovel>
      </S.TopWrapper>
      {props.data?.fetchNovelLikeInUser.map((el) => (
        <S.BoxWrapper key={el.id}>
          <S.ImageWrapper>
            <S.Img
              src={`https://storage.googleapis.com/code-camp-main-project/${el.novel.files[0].url}`}
            />
          </S.ImageWrapper>
          <S.InnerFlex>
            <S.Column>
              <S.Title>{el.novel.title}</S.Title>
              <S.GenreFlex>
                <S.Genre>{el.novel.novelCategory.name}</S.Genre>
                <S.Time>작가 {el.novel.user.nickName}</S.Time>
              </S.GenreFlex>
            </S.Column>
            <S.BoxFlex>
              <S.Button1
                onClick={props.onClickMoveToPage(`/novel/${el.novel.id}`)}
              >
                상세보기
              </S.Button1>
              <S.Button1>찜 취소</S.Button1>
            </S.BoxFlex>
          </S.InnerFlex>
        </S.BoxWrapper>
      ))}
    </S.Wrapper>
  );
}
