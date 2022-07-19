import SearchbarPresenter from "./Searchbar.presenter";
import _ from "lodash";

export default function SearchbarContainer(props: any) {
  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event) {
    getDebounce(event.target.value);
  }

  return <SearchbarPresenter onChangeSearchbar={onChangeSearchbar} />;
}
