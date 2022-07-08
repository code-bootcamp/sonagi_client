import * as S from "./navigation.styles";
export default function LayoutNavigation() {
  return (
    <>
      <S.Wrapper>
        <S.WrapList>
          <S.ListTitle>연재작품</S.ListTitle>
          <S.ListTitle>완결작품</S.ListTitle>
          <S.ListTitle>베스트셀러</S.ListTitle>
          <S.ListTitle>이벤트</S.ListTitle>
          <S.ListTitle>자유게시판</S.ListTitle>
          <S.ListTitle>작품올리기</S.ListTitle>
        </S.WrapList>
        <S.ListImg src="/navigation/list.png" />
      </S.Wrapper>
    </>
  );
}
