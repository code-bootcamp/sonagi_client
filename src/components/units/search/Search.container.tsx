import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useState } from "react";
import SearchPresenter from "./Search.presenter";
import { FETCH_NOVELS_PAGE } from "./Search.queries";
import { Iel } from "./Search.types";

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

  const onClickMoveToDetail = (el: Iel) => (event: MouseEvent) => {
    router.push(`/novel/${event.currentTarget.id}`);
    const baskets = JSON.parse(localStorage.getItem("baskets") || "") || [];
    let isExists = false;
    baskets.forEach((basketEL: any) => {
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

  const onClickTag = (event: any) => {
    refetch({
      searchInput: {
        type: "ALL",
        keyword: event.target.id,
      },
    });
  };

  return (
    <SearchPresenter
      data={data}
      keyword={keyword}
      onClickMoveToDetail={onClickMoveToDetail}
      refetch={refetch}
      onChangeKeyword={onChangeKeyword}
      PbSchool={undefined}
      FinSchool={undefined}
      refetchBoardsCount={undefined}
      onClickTag={onClickTag}
    />
  );
}
