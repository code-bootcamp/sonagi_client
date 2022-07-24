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
        target: "a5d5edfa-43f2-4931-978e-2c7a69f2161e",
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
        target: "a5d5edfa-43f2-4931-978e-2c7a69f2161e",
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
