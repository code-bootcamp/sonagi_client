import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NovelBestListPresenter from "./NovelBestList.presenter";
import { FETCH_PB_BEST_NOVELS_PAGE } from "./NovelBestList.queries";

export default function NovelBestListContainer() {
  // const itemimg = [
  //   11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44,
  //   45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65,
  // ];
  const router = useRouter();

  const { data } = useQuery(FETCH_PB_BEST_NOVELS_PAGE, {
    variables: {
      page: 1,
    },
  });
  console.log("소설", data);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
  };

  return <NovelBestListPresenter data={data} onClick={onClickMoveToDetail} />;
}
