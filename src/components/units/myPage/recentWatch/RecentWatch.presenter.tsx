import HamburgerPage from "../../../commons/hamburger";
import * as S from "./RecentWatch.styles";
export default function RecentWatchPresenter(props) {
  return (
    <S.Wrapper>
      <S.RecentWatch>최근 본 작품</S.RecentWatch>
      <HamburgerPage />
      <S.Flex>
        {props.basketItems?.slice(0, 5).map((el) => (
          <S.BoxWrap
            key={el.id}
            id={el.id}
            onClick={props.onClickMoveToNovelDetail}
          >
            <S.NovelPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            {/* <S.Title>{el.title}</S.Title> */}
          </S.BoxWrap>
        ))}
      </S.Flex>
      <S.BookShelf src="/recentWatch/shelf.png" />
      <S.Flex>
        {props.basketItems?.map((el) => (
          <S.BoxWrap
            key={el.id}
            id={el.id}
            onClick={props.onClickMoveToNovelDetail}
          >
            <S.NovelPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            {/* <S.Title>{el.title}</S.Title> */}
          </S.BoxWrap>
        ))}
      </S.Flex>
      <S.BookShelf src="/recentWatch/shelf.png" />
    </S.Wrapper>
  );
}
