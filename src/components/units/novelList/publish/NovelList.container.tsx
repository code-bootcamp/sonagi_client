import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NovelPbListPresenter from "./NovelList.presenter";
import { FETCH_NOVELS_PAGE } from "./NovelList.queries";

export default function NovelPbListContainer() {
  const router = useRouter();

  const { data } = useQuery(FETCH_NOVELS_PAGE, {
    variables: { page: 1 },
  });
  console.log("소설데이터", data);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${router.query._id}`);
    console.log(event.target);
  };

  // const onClickMoveToNovelDetail = () => {
  //   router.push(`/novel/${router.query._id}`);
  // };

  return (
    <NovelPbListPresenter
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
      // onClickMoveToNovelDetail={onClickMoveToNovelDetail}
    />
  );
}
