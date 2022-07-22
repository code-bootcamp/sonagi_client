import DOMPurify from "dompurify";
import * as S from "./NovelBestList.styles";
import { Iel, INovelBestListPresenterProps } from "./NovelBestList.types";

export default function NovelBestListPresenter(
  props: INovelBestListPresenterProps
) {
  return (
    <S.Wrap>
      <S.Title>베스트셀러</S.Title>
      <S.GridWrap>
        {props.data?.fetchNovelsPage?.novels
          .slice(0, 10)
          .map((el: Iel, index: number) => (
            <S.ItemWrap key={el.title}>
              <S.RowWrap>
                <S.AwardWrap>
                  <S.AwardIcon src="/novelList/best/award.svg" />
                  <S.AwardNum>{index + 1}</S.AwardNum>
                  <S.AwardText>위</S.AwardText>
                </S.AwardWrap>
                <S.PickedWrap>
                  <S.PickedTitle>찜하기</S.PickedTitle>
                  <S.HeartImg
                    el={el.id}
                    HeartList={props.HeartList}
                    onClick={props.onClickLike(el)}
                  />
                </S.PickedWrap>
              </S.RowWrap>
              <S.Itembox>
                <S.ItemPic
                  onClick={props.onClickMoveToDetail(el)}
                  id={el.id}
                  key={el.title}
                  src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
                />
                <S.TextWrap>
                  <S.RowWrap2>
                    <S.ItemName
                      onClick={props.onClickMoveToDetail(el)}
                      id={el.id}
                      key={el.title}
                    >
                      {el.title}
                    </S.ItemName>
                  </S.RowWrap2>
                  <S.Contents
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(el.description),
                    }}
                  ></S.Contents>
                  <S.ItemInfoWrap>
                    <S.IconRowWrap>
                      <S.PickIcon src="/novelList/best/love.svg" />
                      <S.ItemStatus>좋아요 {el.likeCount}</S.ItemStatus>
                    </S.IconRowWrap>
                    <S.Line></S.Line>
                    <S.IconRowWrap>
                      <S.EyeIcon src="/novelList/best/eye.svg" />
                      <S.Hits>조회수 {el.viewCount}</S.Hits>
                    </S.IconRowWrap>
                    <S.Line></S.Line>
                    <S.WrtiterName>{el.user?.nickName}</S.WrtiterName>
                  </S.ItemInfoWrap>
                </S.TextWrap>
              </S.Itembox>
            </S.ItemWrap>
          ))}
      </S.GridWrap>
    </S.Wrap>
  );
}
