import { useRouter } from "next/router";
import * as S from "./navigation.styles";
export default function LayoutNavigation() {
  const router = useRouter();

  const MoveToPbNovelList = () => {
    router.push("/novel/list/publish");
  };

  const MoveToEndNovelList = () => {
    router.push("/novel/list/end");
  };

  const MoveToEventList = () => {
    router.push("/event");
  };

  const MoveToFreeBoardList = () => {
    router.push("/freeBoard");
  };
  return (
    <>
      <S.Wrapper>
        <S.ListTitle onClick={MoveToPbNovelList}>연재작품</S.ListTitle>
        <S.ListTitle onClick={MoveToEndNovelList}>완결작품</S.ListTitle>
        <S.ListTitle>베스트셀러</S.ListTitle>
        <S.ListTitle onClick={MoveToEventList}>이벤트</S.ListTitle>
        <S.ListTitle onClick={MoveToFreeBoardList}>자유게시판</S.ListTitle>
        <S.ListTitle>작품올리기</S.ListTitle>
      </S.Wrapper>
    </>
  );
}
