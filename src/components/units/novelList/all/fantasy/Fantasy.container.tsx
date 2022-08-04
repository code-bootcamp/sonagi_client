import { useRouter } from "next/router";

import FantasyPresenter from "./Fantasy.presenter";
import { FETCH_NOVELS_PAGE } from "./Fantasy.queries";
import { useQuery } from "@apollo/client";

export default function FantasyContainer() {
  const router = useRouter();

  const { data: PbFantasy } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "c07e15ea-7d3f-4d2b-8394-409c4400ab86",
        order: "LAST",
        isFinish: "FALSE",
        page: 1,
      },
    },
  });

  const { data: FinFantasy } = useQuery(FETCH_NOVELS_PAGE, {
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

  const onClickMoveToDetail = (el: any) => (event: any) => {
    router.push(`/novel/${event.currentTarget?.id}`);
  };

  return (
    <FantasyPresenter
      onClickMoveToDetail={onClickMoveToDetail}
      PbFantasy={PbFantasy}
      FinFantasy={FinFantasy}
    />
  );
}
