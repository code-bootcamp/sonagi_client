import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NovelPbListPresenter from "./NovelList.presenter";
import { FETCH_PB_NOVELS_PAGE } from "./NovelList.queries";

export default function NovelPbListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_PB_NOVELS_PAGE, {
    variables: { page: 1 },
  });
  console.log("소설데이터", data);

  const onClickMoveToDetail = (el) => (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    let isExists = false;
    baskets.forEach((basketEL) => {
      if (el.id === basketEL.id) isExists = true;
    });
    if (isExists) {
      return;
    }
    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);
    if (baskets.length > 8) {
      baskets.shift();
    }
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <NovelPbListPresenter
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
