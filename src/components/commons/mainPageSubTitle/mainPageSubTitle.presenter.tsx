import useScrollFadeIn from "../../../commons/hooks/useScrollFadeIn";
import * as S from "./mainPageSubTitle.styles";

export default function MainPageSubTitlePresenter() {
  const FadeIn = useScrollFadeIn();

  return (
    <S.TitleWrapper {...FadeIn}>
      <S.SubTitleWrapper>
        <S.Title>소소한</S.Title>
        <S.Title>나의 이야기</S.Title>
      </S.SubTitleWrapper>
      <S.SubTitleWrapper>
        <S.Subtitle>베스트 셀러와</S.Subtitle>
        <S.Subtitle>최신 작품들까지</S.Subtitle>
      </S.SubTitleWrapper>
    </S.TitleWrapper>
  );
}
