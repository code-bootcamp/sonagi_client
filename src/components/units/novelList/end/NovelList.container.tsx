import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NovelEndListPresenter from "./NovelList.presenter";
import { FETCH_NOVELS_PAGE } from "./NovelList.queries";
import { Iel } from "./NovelList.types";

export default function NovelEndListContainer() {
  const router = useRouter();

  // 로맨스
  const { data: Romance } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "64dc52e6-50dd-4403-ac72-6ced9b1d0d96",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  // 로맨스 판타지
  const { data: RomanceFantasy } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "19295599-e565-4115-922f-d4a487bbcad1",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  // 판타지
  const { data: Fantasy } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "c07e15ea-7d3f-4d2b-8394-409c4400ab86",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  // 무협
  const { data: Asia } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "48133761-446e-4433-bbe7-4bd32771122f",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  // 학원
  const { data: School } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "5dfca982-fed3-4be2-aa10-aa7f001d5607",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  // 공포
  const { data: Horror } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "8dc5f497-cb66-4ee5-a0a2-05cfa1a12da4",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  const onClickMoveToDetail =
    (el: Iel) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/novel/${event.currentTarget.id}`);
      const baskets = JSON.parse(localStorage.getItem("baskets") || "[]") || [];
      let isExists = false;
      baskets.forEach((basketEL: Iel) => {
        if (el.id === basketEL.id) isExists = true;
      });
      if (isExists) {
        return;
      }
      const newEl = { ...el };
      delete newEl.__typename;
      baskets.push(newEl);
      if (baskets.length > 10) {
        baskets.shift();
      }
      localStorage.setItem("baskets", JSON.stringify(baskets));
    };

  const onClickMoveToRomancePage = () => {
    router.push("/novel/list/all/romance");
  };

  const onClickMoveToRomanceFantasyPage = () => {
    router.push("/novel/list/all/romanceFantasy");
  };

  const onClickMoveToFantasyPage = () => {
    router.push("/novel/list/all/fantasy");
  };

  const onClickMoveToAsiaPage = () => {
    router.push("/novel/list/all/asia");
  };

  const onClickMoveToSchoolPage = () => {
    router.push("/novel/list/all/school");
  };

  const onClickMoveToHorrorPage = () => {
    router.push("/novel/list/all/horror");
  };

  return (
    <NovelEndListPresenter
      Romance={Romance}
      RomanceFantasy={RomanceFantasy}
      Fantasy={Fantasy}
      Asia={Asia}
      School={School}
      Horror={Horror}
      onClickMoveToDetail={onClickMoveToDetail}
      onClickMoveToRomancePage={onClickMoveToRomancePage}
      onClickMoveToRomanceFantasyPage={onClickMoveToRomanceFantasyPage}
      onClickMoveToFantasyPage={onClickMoveToFantasyPage}
      onClickMoveToAsiaPage={onClickMoveToAsiaPage}
      onClickMoveToSchoolPage={onClickMoveToSchoolPage}
      onClickMoveToHorrorPage={onClickMoveToHorrorPage}
    />
  );
}
