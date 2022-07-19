import HamburgerPage from "../../../commons/hamburger";
import * as S from "./LikeNovel.styles";
import { ILikeNovelPresenterProps } from "./LikeNovel.types";

export default function LikeNovelPresenter(props: ILikeNovelPresenterProps) {
  return (
    <S.Wrapper>
      <S.TopWrapper>
        <S.LikeNovel>찜한 작품</S.LikeNovel>
        <HamburgerPage />
      </S.TopWrapper>
      <S.GridWrap>
        {props.data?.fetchNovelLikeInUser
          .slice(0)
          .reverse()
          .map((el: any) => (
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
                  <S.Button1 onClick={props.onClickDeleteNovelLike(el)}>
                    찜하기 취소
                  </S.Button1>
                </S.BoxFlex>
              </S.InnerFlex>
            </S.BoxWrapper>
          ))}
      </S.GridWrap>
    </S.Wrapper>
  );
}
