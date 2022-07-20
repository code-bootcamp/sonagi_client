import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import SearchPresenter from "./Search.presenter";
import { FETCH_NOVELS_PAGE } from "./Search.queries";

export default function SearchContainer() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");

  const { data, refetch } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "ALL",
        target: "",
        order: "LIKE",
        isFinish: "ALL",
        page: 1,
      },
      searchInput: {
        type: "ALL",
        keyword,
      },
    },
  });
  console.log("소설데이터", data);

  const onClickMoveToDetail = (el: any) => (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "") || [];
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

  function onChangeKeyword(value: string) {
    setKeyword(value);
  }

  return (
    <SearchPresenter
      data={data}
      keyword={keyword}
      onClickMoveToDetail={onClickMoveToDetail}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
    />
  );
}
