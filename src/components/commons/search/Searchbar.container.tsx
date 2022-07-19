import SearchbarPresenter from "./Searchbar.presenter";
import _ from "lodash";
import { useEffect } from "react";
import { searchKeyword } from "../../../commons/store";
import { useRecoilState } from "recoil";

export default function SearchbarContainer(props: any) {
  const [skeyword] = useRecoilState(searchKeyword);

  const getDebounce = _.debounce((data: string) => {
    props.refetch({ searchInput: data, page: 1 });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event: any) {
    getDebounce(event.target.value);
  }
  console.log(skeyword);

  useEffect(() => {
    if (skeyword !== "") {
      props.refetch({
        searchInput: { type: "ALL", keyword: skeyword },
        page: 1,
      });
    }
  }, []);

  return <SearchbarPresenter onChangeSearchbar={onChangeSearchbar} />;
}
