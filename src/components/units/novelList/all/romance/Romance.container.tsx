import { useRouter } from "next/router";

import RomancePresenter from "./Romance.presenter";
import { FETCH_NOVELS_PAGE } from "./Romance.queries";
import { useQuery } from "@apollo/client";

export default function RomanceContainer() {
  const router = useRouter();

  const { data: PbRomance } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "64dc52e6-50dd-4403-ac72-6ced9b1d0d96",
        order: "LAST",
        isFinish: "FALSE",
        page: 1,
      },
    },
  });
  console.log("소설데이터", PbRomance);

  const { data: FinRomance } = useQuery(FETCH_NOVELS_PAGE, {
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
  console.log("소설데이터", FinRomance);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
  };

  // const loadFunc = () => {
  //   if (!PbRomance) return;

  //   fetchMore({
  //     variables: {
  //       count: Math.ceil(PbRomance.fetchNovelsPage.length / 10) + 1,
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult.fetchNovelsPage)
  //         return {
  //           fetchNovelsPage: [...prev.fetchNovelsPage],
  //         };
  //       return {
  //         fetchNovelsPage: [
  //           ...prev.fetchNovelsPage,
  //           ...fetchMoreResult.fetchNovelsPage,
  //         ],
  //       };
  //     },
  //   });
  // };

  return (
    <RomancePresenter
      onClickMoveToDetail={onClickMoveToDetail}
      PbRomance={PbRomance}
      FinRomance={FinRomance}
      // loadFunc={loadFunc}
    />
  );
}
