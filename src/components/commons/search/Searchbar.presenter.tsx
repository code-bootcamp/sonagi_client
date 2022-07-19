import * as S from "./Searchbar.styles";

export default function SearchbarPresenter(props) {
  return (
    <S.Wrap>
      <S.SearchbarInput
        placeholder="검색어를 입력하세요"
        onChange={props.onChangeSearchbar}
      />
    </S.Wrap>
  );
}
