import SearchbarPresenter from "./Searchbar.presenter";
import { ISearchbarsProps } from "./Searchbar.types";

import _ from "lodash";
import { useEffect } from "react";
import { searchKeyword } from "../../../commons/store";
import { useRecoilState } from "recoil";

export default function SearchbarContainer(props: ISearchbarsProps) {
  const [skeyword] = useRecoilState(searchKeyword);

  const getDebounce = _.debounce((data: string) => {
    props.refetch({ searchInput: data, page: 1 });
    props.onChangeKeyword(data);
  }, 500);

  function onChangeSearchbar(event: any) {
    getDebounce(event.target.value);
  }
  console.log(skeyword);

  useEffect(() => {
    props.onChangeKeyword(skeyword);
    if (skeyword !== "") {
      props.refetch({
        searchInput: { type: "ALL", keyword: skeyword },
        page: 1,
      });
    }
  }, [skeyword]);

  return <SearchbarPresenter onChangeSearchbar={onChangeSearchbar} />;
}
