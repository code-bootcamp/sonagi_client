import * as S from "./Searchbar.styles";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../../../commons/store";
import { ISearchbarsUIProps } from "./Searchbar.types";

export default function SearchbarPresenter(props: ISearchbarsUIProps) {
  const [skeyword] = useRecoilState(searchKeyword);

  return (
    <S.Wrap>
      <S.SearchbarInput
        defaultValue={skeyword}
        placeholder="검색어를 입력하세요"
        onChange={props.onChangeSearchbar}
      />
    </S.Wrap>
  );
}
