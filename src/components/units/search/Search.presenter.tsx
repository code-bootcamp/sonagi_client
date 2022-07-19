import * as S from "./Search.styles";
import SearchbarContainer from "../../commons/search/Searchbar.container";
import DOMPurify from "dompurify";

export default function SearchPresenter(props: any) {
  return (
    <S.Wrap>
      <S.SearchInputWrap>
        <SearchbarContainer />
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
        {props.Romance?.fetchNovelsPage?.novels.slice(0, 5).map((el: any) => (
          <S.ItemWrap
            onClick={props.onClickMoveToDetail(el)}
            id={el.id}
            key={el.title}
          >
            <S.ItemPic
              src={`https://storage.googleapis.com/code-camp-main-project/${el.files[0]?.url}`}
            />
            <S.ItemInfo>
              <S.ItemName>{el.title}</S.ItemName>
              <S.ItemNum>10화</S.ItemNum>
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
