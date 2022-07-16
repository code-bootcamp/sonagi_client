import * as S from "./MyNovel.styles";
export default function MyNovelPresenter(props) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.MyNovel>나의 작품</S.MyNovel>
        <S.WriteButton onClick={props.onClickMoveToPage(`/novel/new`)}>
          새 작품 쓰기
        </S.WriteButton>
      </S.TopWrapper>
      {props.data?.fetchMyNovels.novels.map((el) => (
        <S.BoxWrapper key={el.id}>
          <S.ImageWrapper>
            <S.Img
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0].url}`}
            />
          </S.ImageWrapper>
          <S.InnerFlex>
            <S.Column>
              <S.Title id={el.id} onClick={props.onClickMyNovel(el)}>
                {el.title}
              </S.Title>
              <S.GenreFlex>
                <S.Genre>{el.novelCategory.name}</S.Genre>
                <S.Time>조회수 {el.viewCount}</S.Time>
              </S.GenreFlex>
            </S.Column>
            <S.BoxFlex>
              <S.Button1 onClick={props.onClickMoveToPage(`/novel/${el.id}`)}>
                상세보기
              </S.Button1>
              <S.Button1
                onClick={props.onClickMoveToPage(`/novel/${el.id}/volume/new`)}
              >
                연재하기
              </S.Button1>
            </S.BoxFlex>
          </S.InnerFlex>
        </S.BoxWrapper>
      ))}
    </S.Wrapper>
  );
}
