import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NovelEndListPresenter from "./NovelList.presenter";
import { FETCH_FIN_NOVELS_PAGE } from "./NovelList.queries";

export default function NovelEndListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_FIN_NOVELS_PAGE, {
    variables: {
      page: 1,
    },
  });
  console.log("소설", data);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
  };

  return (
    <NovelEndListPresenter
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
