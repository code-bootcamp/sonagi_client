import SearchPresenter from "./Search.presenter";
import _ from "lodash";

export default function SearchContainer(props: any) {
  const getDebounce = _.debounce((data: string) => {
    props.refetch({ search: data, page: 1 });
    props.refetchBoardsCount({ search: data });
    props.onChangeKeyword(data);
  }, 200);

  function onChangeSearchbar(event) {
    getDebounce(event.target.value);
  }

  return <SearchPresenter onChangeSearchbar={onChangeSearchbar} />;
}
