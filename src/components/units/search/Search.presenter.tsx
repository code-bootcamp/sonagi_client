import * as S from "./Search.styles";
import SearchbarContainer from "../../commons/search/Searchbar.container";
import DOMPurify from "dompurify";
import { v4 as uuidv4 } from "uuid";
import { ISearchPresenterProps } from "./Search.types";

export default function SearchPresenter(props: ISearchPresenterProps) {
  return (
    <S.Wrap>
      <S.SearchInputWrap>
        <SearchbarContainer
          refetch={props.refetch}
          onChangeKeyword={props.onChangeKeyword}
        />
      </S.SearchInputWrap>
      <S.TagWrap>
        <S.Tag id="학원" onClick={props.onClickTag}>
          #학원
        </S.Tag>
        <S.Tag id="로맨스" onClick={props.onClickTag}>
          #로맨스
        </S.Tag>
        <S.Tag id="로맨스 판타지" onClick={props.onClickTag}>
          #로맨스판타지
        </S.Tag>
        <S.Tag id="판타지" onClick={props.onClickTag}>
          #판타지
        </S.Tag>
        <S.Tag id="무협" onClick={props.onClickTag}>
          #무협
        </S.Tag>
        <S.Tag id="미스터리" onClick={props.onClickTag}>
          #미스테리
        </S.Tag>
      </S.TagWrap>
      {props.data?.fetchNovelsPage.novels.length === 0 ? (
        <S.GridWrap2>
          <S.NoImage
            src="/search/no-search.png"
            alt="찾으시는 작품이 없습니다.."
          />
        </S.GridWrap2>
      ) : (
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
                    .map((el: any) => (
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
      )}
    </S.Wrap>
  );
}
