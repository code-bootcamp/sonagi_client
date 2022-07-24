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
        target: "8920f3ff-6ba9-4a01-8c2f-842a4adc19e0",
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
        target: "a5d5edfa-43f2-4931-978e-2c7a69f2161e",
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
        target: "e781d053-1749-400b-a5e7-1ece9bd3a3ca",
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
        target: "49dd41d2-cd7b-4d2d-806b-d72c077e2d70",
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
        target: "74ca7d6a-f00d-43cb-8554-f0426a29cefb",
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
        target: "27a6ad7b-d039-42b1-b5d4-c766faf9cac8",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  const onClickMoveToDetail =
    (el: Iel) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/novel/${event.currentTarget.id}`);
      const baskets = JSON.parse(localStorage.getItem("baskets") || "") || [];
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
