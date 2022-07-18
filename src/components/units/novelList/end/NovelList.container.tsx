import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NovelEndListPresenter from "./NovelList.presenter";
import { FETCH_FIN_NOVELS_PAGE } from "./NovelList.queries";

export default function NovelEndListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_FIN_NOVELS_PAGE, {
    variables: {
      page: 1,
    },
  });
  console.log("소설", data);

  const onClickMoveToDetail = (el) => (event) => {
    router.push(`/novel/${event.currentTarget.id}`);
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
    <NovelEndListPresenter
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
