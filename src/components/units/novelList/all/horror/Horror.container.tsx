import { useRouter } from "next/router";
import HorrorPresenter from "./Horror.presenter";
import { FETCH_NOVELS_PAGE } from "./Horror.queries";
import { useQuery } from "@apollo/client";

export default function HorrorContainer() {
  const router = useRouter();

  const { data: PbHorror } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "8dc5f497-cb66-4ee5-a0a2-05cfa1a12da4",
        order: "LAST",
        isFinish: "FALSE",
        page: 1,
      },
    },
  });

  const { data: FinHorror } = useQuery(FETCH_NOVELS_PAGE, {
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

  const onClickMoveToDetail = (el: any) => (event: any) => {
    router.push(`/novel/${event.currentTarget?.id}`);
  };

  return (
    <HorrorPresenter
      onClickMoveToDetail={onClickMoveToDetail}
      PbHorror={PbHorror}
      FinHorror={FinHorror}
    />
  );
}
