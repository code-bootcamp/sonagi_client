import * as S from "./Search.styles";

export default function SearchPresenter(props) {
  return (
    <S.Wrap>
      <S.SearchInput
        placeholder="검색어를 입력하세요"
        onChange={props.onChangeSearchbar}
      />
    </S.Wrap>
  );
}
