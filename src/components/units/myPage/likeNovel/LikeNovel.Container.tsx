import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import LikeNovelPresenter from "./LikeNovel.presenter";
import { DELETE_NOVEL_LIKE, FETCH_NOVEL_LIKE } from "./LikeNovel.queries";
import { ILikeNovelContainerProps } from "./LikeNovel.types";

export default function LikeNovelContainer() {
  const { data } = useQuery(FETCH_NOVEL_LIKE);

  console.log(data);

  const [deleteNovelLike] = useMutation(DELETE_NOVEL_LIKE);
  const { onClickMoveToPage } = useMoveToPage();

  const onClickDeleteNovelLike = (el: ILikeNovelContainerProps) => async () => {
    try {
      const result = await deleteNovelLike({
        variables: {
          novelLikeID: String(el.id),
        },
        refetchQueries: [
          {
            query: FETCH_NOVEL_LIKE,
          },
        ],
      });
      console.log(result);
      Modal.success({ content: "찜하기가 취소되었습니다" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return (
    <LikeNovelPresenter
      data={data}
      onClickMoveToPage={onClickMoveToPage}
      onClickDeleteNovelLike={onClickDeleteNovelLike}
    />
  );
}
