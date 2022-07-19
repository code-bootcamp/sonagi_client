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
        target: "e781d053-1749-400b-a5e7-1ece9bd3a3ca",
        order: "LAST",
        isFinish: false,
        page: 1,
      },
    },
  });
  console.log("소설데이터", PbFantasy);

  const { data: FinFantasy } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "e781d053-1749-400b-a5e7-1ece9bd3a3ca",
        order: "LAST",
        isFinish: true,
        page: 1,
      },
    },
  });
  console.log("소설데이터", FinFantasy);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
  };

  return (
    <FantasyPresenter
      onClick={onClickMoveToDetail}
      PbFantasy={PbFantasy}
      FinFantasy={FinFantasy}
    />
  );
}
