import { useRouter } from "next/router";

import RomanceFantasyPresenter from "./RomanceFantasy.presenter";
import { FETCH_NOVELS_PAGE } from "./RomanceFantasy.queries";
import { useQuery } from "@apollo/client";

export default function RomanceFantasyContainer() {
  const router = useRouter();

  const { data: PbRomanceFantasy } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "19295599-e565-4115-922f-d4a487bbcad1",
        order: "LAST",
        isFinish: "FALSE",
        page: 1,
      },
    },
  });
  console.log("소설데이터", PbRomanceFantasy);

  const { data: FinRomanceFantasy } = useQuery(FETCH_NOVELS_PAGE, {
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
  console.log("소설데이터", FinRomanceFantasy);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
  };

  return (
    <RomanceFantasyPresenter
      onClickMoveToDetail={onClickMoveToDetail}
      PbRomanceFantasy={PbRomanceFantasy}
      FinRomanceFantasy={FinRomanceFantasy}
    />
  );
}
