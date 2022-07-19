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
        target: "27a6ad7b-d039-42b1-b5d4-c766faf9cac8",
        order: "LAST",
        isFinish: false,
        page: 1,
      },
    },
  });
  console.log("소설데이터", PbHorror);

  const { data: FinHorror } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "27a6ad7b-d039-42b1-b5d4-c766faf9cac8",
        order: "LAST",
        isFinish: true,
        page: 1,
      },
    },
  });
  console.log("소설데이터", FinHorror);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
  };

  return (
    <HorrorPresenter
      onClick={onClickMoveToDetail}
      PbHorror={PbHorror}
      FinHorror={FinHorror}
    />
  );
}
