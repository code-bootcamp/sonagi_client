import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NovelBestListPresenter from "./NovelBestList.presenter";
import { FETCH_PB_BEST_NOVELS_PAGE } from "./NovelBestList.queries";

export default function NovelBestListContainer() {
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
