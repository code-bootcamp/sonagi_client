import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NovelBestListPresenter from "./NovelBestList.presenter";
import {
  CREATE_NOVEL_LIKE,
  FETCH_NOVEL_LIKE,
  FETCH_NOVELS_PAGE,
} from "./NovelBestList.queries";

export default function NovelBestListContainer() {
  const router = useRouter();

  const [createNovelLike] = useMutation(CREATE_NOVEL_LIKE);
  const { data: LikeNovel } = useQuery(FETCH_NOVEL_LIKE);
  console.log(LikeNovel);

  const HeartList = LikeNovel?.fetchNovelLikeInUser.map((el) => el.novel.id);
  console.log(HeartList);

  const onClickLike = (el) => async () => {
    try {
      const result = await createNovelLike({
        variables: {
          novelID: el.id,
        },
      });
      console.log(el.id);
      console.log(result);
      window.location.replace("/novel/list/best");
      alert("선호작 등록!!");
    } catch (error) {
      alert(error.message);
    }
  };
  const { data } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "ALL",
        target: "",
        order: "LIKE",
        isFinish: "ALL",
        page: 1,
      },
    },
  });

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
  };

  return (
    <NovelBestListPresenter
      data={data}
      onClickLike={onClickLike}
      onClick={onClickMoveToDetail}
      HeartList={HeartList}
    />
  );
}
