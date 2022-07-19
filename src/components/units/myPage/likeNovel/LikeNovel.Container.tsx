import { useMutation, useQuery } from "@apollo/client";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import LikeNovelPresenter from "./LikeNovel.presenter";
import { DELETE_NOVEL_LIKE, FETCH_NOVEL_LIKE } from "./LikeNovel.queries";
import { ILikeNovelContainerProps } from "./LikeNovel.types";

export default function LikeNovelContainer(props: ILikeNovelContainerProps) {
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
      });
      console.log(result);
      alert("찜 취소 완료");
      window.location.replace("/myPage/likeNovel");
    } catch (error) {
      console.log(error);
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
