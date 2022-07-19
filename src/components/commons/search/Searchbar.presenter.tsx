import * as S from "./Searchbar.styles";
import { useRecoilState } from "recoil";
import { searchKeyword } from "../../../commons/store";

export default function SearchbarPresenter(props) {
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
