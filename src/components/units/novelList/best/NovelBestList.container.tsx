import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import NovelBestListPresenter from "./NovelBestList.presenter";
import {
  FETCH_NOVEL_LIKE,
  FETCH_NOVELS_PAGE,
  SWITCH_NOVEL_LIKE,
} from "./NovelBestList.queries";
import { Iel, INovelBestListPresenterProps } from "./NovelBestList.types";

export default function NovelBestListContainer(
  props: INovelBestListPresenterProps
) {
  const router = useRouter();

  const [switchNovelLikes] = useMutation(SWITCH_NOVEL_LIKE);
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

  const HeartList = LikeNovel?.fetchNovelLikeInUser.map(
    (el: Iel) => el.novel.id
  );

  const onClickLike = (el: Iel) => async () => {
    try {
      await switchNovelLikes({
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
      if (HeartList.includes(el.id)) {
        Modal.success({ content: "선호작 취소" });
      } else Modal.success({ content: "선호작 등록!" });
    } catch (error) {
      Modal.error({ content: "로그인 후 이용해주세요." });
    }
  };

  const onClickMoveToDetail =
    (el: Iel) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/novel/${event.currentTarget.id}`);
      const baskets = JSON.parse(localStorage.getItem("baskets") || "[]") || [];
      let isExists = false;
      baskets.forEach((basketEL: Iel) => {
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
      onClickMoveToDetail={onClickMoveToDetail}
      HeartList={HeartList}
      el={{
        id: undefined,
        el: undefined,
      }}
    />
  );
}
