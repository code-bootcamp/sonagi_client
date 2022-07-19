import * as S from "./Search.styles";
import SearchbarContainer from "../../commons/search/Searchbar.container";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";

export default function SearchPresenter(props: any) {
  return (
    <S.Wrap>
      <S.SearchInputWrap>
        <SearchbarContainer
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
      </S.SearchInputWrap>
      <S.TagWrap>
        <S.Tag>#학원</S.Tag>
        <S.Tag>#로맨스</S.Tag>
        <S.Tag>#로맨스판타지</S.Tag>
        <S.Tag>#판타지</S.Tag>
        <S.Tag>#스릴러</S.Tag>
        <S.Tag>#미스테리</S.Tag>
      </S.TagWrap>
      <S.GridWrap>
        {props.data?.fetchNovelsPage?.novels.map((el: any) => (
          <S.ItemWrap
            onClick={props.onClickMoveToDetail(el)}
            id={el.id}
            key={el}
          >
            <S.ItemPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            <S.ItemInfo>
              <S.ItemName>
                {el.title
                  .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                  .split("@#$%")
                  .map((el) => (
                    <S.TextToken
                      key={uuidv4()}
                      isMatched={props.keyword === el}
                    >
                      {el}
                    </S.TextToken>
                  ))}
              </S.ItemName>
              <S.ItemNum>
                {el.cycle === 0 ? (
                  <S.Cycle>자유연재</S.Cycle>
                ) : (
                  <S.Cycle>요일연재</S.Cycle>
                )}
              </S.ItemNum>
            </S.ItemInfo>
            <S.ItemWriterWrap>
              <S.WriterIcon src="/novelList/writer-icon.png" />
              <S.WrtiterName>{el.user?.nickName}</S.WrtiterName>
            </S.ItemWriterWrap>
            <S.Contents
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(el.description),
              }}
            ></S.Contents>
          </S.ItemWrap>
        ))}
      </S.GridWrap>
    </S.Wrap>
  );
}
