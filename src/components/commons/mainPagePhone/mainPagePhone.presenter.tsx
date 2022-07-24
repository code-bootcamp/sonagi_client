import useScrollFadeIn from "../../../commons/hooks/useScrollFadeIn";
import * as S from "./mainPagePhone.styles";

export default function MainPagePhonePresenter() {
  const FadeUp = useScrollFadeIn();

  return (
    <S.PhoneWrapper>
      <div {...FadeUp}>
        <S.SubTitleWrapper>
          <S.Title>무료 소설과</S.Title>
          <S.Title>인기 작가의 작품</S.Title>
        </S.SubTitleWrapper>
        <S.SubTitleWrapper>
          <S.Subtitle>독자들이 픽한</S.Subtitle>
          <S.Subtitle>인기 분야 소설을 확인해보세요</S.Subtitle>
        </S.SubTitleWrapper>
      </div>
      <S.PhoneImg src="/mainpage/phone.png" />
      <S.PhoneSubImg src="/mainpage/phone2-1.png" />
      <S.PhoneSubImg2 src="/mainpage/phone2-4.png" />
      <S.PhoneSubImg3 src="/mainpage/phone2-2.png" />
      <S.PhoneSubImg4 src="/mainpage/phone2-3.png" />
    </S.PhoneWrapper>
  );
}
