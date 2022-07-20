import { Key } from "react";
import HamburgerPage from "../../../commons/hamburger";
import * as S from "./RecentWatch.styles";
import { IRecentWatchPresenterProps } from "./RecentWatch.types";
export default function RecentWatchPresenter(
  props: IRecentWatchPresenterProps
) {
  return (
    <S.Wrapper>
      <S.RecentWatch>최근 본 작품</S.RecentWatch>
      <HamburgerPage />
      <S.Wrap>
        <S.Flex>
          {props.basketItems?.slice(0, 4).map((el) => (
            <S.BoxWrap
              key={el.id}
              id={el.id}
              onClick={props.onClickMoveToNovelDetail}
            >
              <S.NovelPic
                src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
              />
              {/* <S.TitleWrap>
                <S.Title>{el.title}</S.Title>
                <S.NovelCategory>{el.novelCategory?.name}</S.NovelCategory>
              </S.TitleWrap> */}
            </S.BoxWrap>
          ))}
        </S.Flex>
        <div>
          <S.BookShelf src="/recentWatch/shelf.png" />
        </div>
      </S.Wrap>
      <S.Wraps>
        <S.Flex>
          {props.basketItems
            ?.slice(5, 9)
            .map(
              (el: { id: Key | null | undefined; files: { url: any }[] }) => (
                <S.BoxWraps
                  key={el.id}
                  id={el.id}
                  onClick={props.onClickMoveToNovelDetail}
                >
                  <S.NovelPics
                    src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
                  />
                  {/* <S.TitleWrap>
                    <S.Title>{el.title}</S.Title>
                  </S.TitleWrap> */}
                </S.BoxWraps>
              )
            )}
        </S.Flex>
        <S.BookShelfs src="/recentWatch/shelf.png" />
      </S.Wraps>
    </S.Wrapper>
  );
}
