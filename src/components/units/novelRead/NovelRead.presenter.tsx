import * as S from "./NovelRead.styles";

export default function NovelReadPresenter(props) {
  return (
    <S.Wrapper>
      <S.HeadWrapper setDisplay={props.setDisplay}>
        <S.LeftWrapper>
          <S.LogoImg onClick={props.onClickMoveToMain} src="/header/logo.png" />
          <S.ArrowLeft src="/novelRead/arrowleft.png" />
        </S.LeftWrapper>
        <S.TitleWrapper>
          <S.Title>소설 제목</S.Title>
          <S.SubTitle>0회 : 회차제목</S.SubTitle>
        </S.TitleWrapper>
        <S.RightWrapper>
          <S.SettingImg src="/novelRead/heart.png" />
          <S.SettingImg src="/novelRead/bookmark.png" />
          <S.SettingImg src="/novelRead/setting.png" />
        </S.RightWrapper>
      </S.HeadWrapper>
      <S.BodyWrapper onClick={props.onClickDisplay}>
        이건 소설입니다
        <br />
        이건 소설입니다
        <br />
        이건 소설입니다
        <br />
        이건 소설입니다
        <br />
        이건 소설입니다
        <br />
        이건 소설입니다
        <br />
        이건 소설입니다
        <br />
        이건 소설입니다
        <br />
        이건 소설입니다
        <br />
      </S.BodyWrapper>
      <S.FooterWrapper setDisplay={props.setDisplay}>
        <S.LeftWrapper>
          <S.Comment src="/novelRead/comment.png" />
          <S.CommentNumber>10</S.CommentNumber>
        </S.LeftWrapper>
        <S.CenterWrapper>
          <S.FooterArrow src="/novelRead/footerArrowLeft.png" />
          <S.Content>이전화</S.Content>
          <S.Content>다음화</S.Content>
          <S.FooterArrow src="/novelRead/footerArrowRight.png" />
        </S.CenterWrapper>
        <S.RightWrapper>
          <S.Comment src="/novelRead/list.png" />
          <S.Content>목록</S.Content>
        </S.RightWrapper>
      </S.FooterWrapper>
    </S.Wrapper>
  );
}
