import DOMPurify from "dompurify";
import * as S from "./NovelBestList.styles";

export default function NovelBestListPresenter(props: any) {
  return (
    <S.Wrap>
      <S.Title>베스트셀러</S.Title>
      <S.GridWrap>
        {props.data?.fetchNovelCyclesPageLikeOrder?.novels
          .slice(0, 10)
          .map((el: any, index: number) => (
            <S.ItemWrap
              onClick={props.onClickMoveToDetail}
              id={el.id}
              key={el.title}
            >
              <S.RowWrap>
                <S.AwardIcon src="/novelList/best/award.svg" />
                <S.AwardNum>{index + 1}</S.AwardNum>
                <S.AwardText>위</S.AwardText>
              </S.RowWrap>
              <S.Itembox>
                <S.ItemPic
                  src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
                />
                <S.TextWrap>
                  <S.RowWrap2>
                    <S.ItemName>{el.title}</S.ItemName>
                    <S.HeartImg
                      el={el.id}
                      HeartList={props.HeartList}
                      onClick={props.onClickLike(el)}
                    />
                  </S.RowWrap2>
                  <S.Contents
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(el.description),
                    }}
                  ></S.Contents>
                  <S.ItemInfoWrap>
                    <S.ItemStatus>좋아요 {el.likeCount}</S.ItemStatus>
                    <S.Line></S.Line>
                    <S.Hits>조회수 {el.viewCount}</S.Hits>
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
