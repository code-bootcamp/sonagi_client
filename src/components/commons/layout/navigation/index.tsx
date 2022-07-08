import { useRouter } from "next/router";
import * as S from "./navigation.styles";
export default function LayoutNavigation() {
  const router = useRouter();

  const MoveToEventList = () => {
    router.push("/event");
  };

  const MoveToFreeBoardList = () => {
    router.push("/freeBoard");
  };
  return (
    <>
      <S.Wrapper>
        <S.ListTitle>연재작품</S.ListTitle>
        <S.ListTitle>완결작품</S.ListTitle>
        <S.ListTitle>베스트셀러</S.ListTitle>
        <S.ListTitle onClick={MoveToEventList}>이벤트</S.ListTitle>
        <S.ListTitle onClick={MoveToFreeBoardList}>자유게시판</S.ListTitle>
        <S.ListTitle>작품올리기</S.ListTitle>
      </S.Wrapper>
    </>
  );
}
