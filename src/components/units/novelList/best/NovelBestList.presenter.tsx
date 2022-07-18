import DOMPurify from "dompurify";
import * as S from "./NovelBestList.styles";

export default function NovelBestListPresenter(props) {
  return (
    <S.Wrap>
      <S.Title>베스트셀러</S.Title>
      <S.GridWrap>
        {props.data?.fetchNovelCyclesPageLikeOrder?.novels
          .slice(0, 10)
          .map((el: any) => (
            <S.ItemWrap
              onClick={props.onClickMoveToDetail}
              id={el.id}
              key={el.title}
            >
              <S.RowWrap>
                <S.AwardIcon src="/novelList/best/award.svg" />
                <S.AwardNum>1</S.AwardNum>
                <S.AwardText>위</S.AwardText>
              </S.RowWrap>
              <S.Itembox>
                <S.ItemPic
                  src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
                />
                <S.TextWrap>
                  <S.RowWrap2>
                    <S.ItemName>{el.title}</S.ItemName>
                    <S.ItemPickIcon src="/novelList/best/pick.svg" />
                  </S.RowWrap2>
                  <S.Contents
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(el.description),
                    }}
                  ></S.Contents>
                  <S.ItemInfoWrap>
                    <S.ItemStatus>{el.likeCount}</S.ItemStatus>
                    <S.Line></S.Line>
                    <S.Hits>{el.viewCount}</S.Hits>
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
