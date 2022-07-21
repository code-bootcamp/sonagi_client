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
  // const [deleteNovelLike] = useMutation(DELETE_NOVEL_LIKE);
  const { data: LikeNovel } = useQuery(FETCH_NOVEL_LIKE);
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
  console.log(LikeNovel);

  const HeartList = LikeNovel?.fetchNovelLikeInUser.map((el) => el.novel.id);
  console.log(HeartList);

  const onClickLike = (el) => async () => {
    try {
      const result = await createNovelLike({
        variables: {
          novelID: el.id,
        },
        refetchQueries: [
          {
            query: FETCH_NOVELS_PAGE,
            variables: {
              fetchNovelInput: {
                type: "ALL",
                target: "",
                order: "LIKE",
                isFinish: "ALL",
                page: 1,
              },
            },
          },
          {
            query: FETCH_NOVEL_LIKE,
          },
        ],
      });
      console.log(el.id);
      console.log(result);
      alert("선호작 등록!!");
    } catch (error) {
      alert(error.message);
    }
  };

  // const onClickDeleteLike = (el) => async () => {
  //   console.log(el);
  //   try {
  //     const result = await deleteNovelLike({
  //       variables: {
  //         novelLikeID: el.id,
  //       },
  //       // refetchQueries: [
  //       //   {
  //       //     query: FETCH_NOVELS_PAGE,
  //       //     variables: {
  //       //       fetchNovelInput: {
  //       //         type: "ALL",
  //       //         target: "",
  //       //         order: "LIKE",
  //       //         isFinish: "ALL",
  //       //         page: 1,
  //       //       },
  //       //     },
  //       //   },
  //       // ],
  //     });
  //     console.log(el.id);
  //     console.log(result);
  //     alert("선호작 취소!");
  //   } catch (error) {
  //     alert((error as Error).message);
  //   }
  // };

  const onClickMoveToDetail = (el) => (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    const baskets = JSON.parse(localStorage.getItem("baskets")) || [];
    let isExists = false;
    baskets.forEach((basketEL) => {
      if (el.id === basketEL.id) isExists = true;
    });
    if (isExists) {
      return;
    }
    const newEl = { ...el };
    delete newEl.__typename;
    baskets.push(newEl);
    if (baskets.length > 10) {
      baskets.shift();
    }
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <NovelBestListPresenter
      data={data}
      onClickLike={onClickLike}
      // onClickDeleteLike={onClickDeleteLike}
      onClickMoveToDetail={onClickMoveToDetail}
      HeartList={HeartList}
    />
  );
}
