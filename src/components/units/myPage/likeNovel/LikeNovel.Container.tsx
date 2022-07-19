import { useQuery } from "@apollo/client";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import LikeNovelPresenter from "./LikeNovel.presenter";
import { FETCH_NOVEL_LIKE } from "./LikeNovel.queries";

export default function LikeNovelContainer() {
  const { data } = useQuery(FETCH_NOVEL_LIKE);
  const { onClickMoveToPage } = useMoveToPage();

  console.log(data);

  return (
    <LikeNovelPresenter data={data} onClickMoveToPage={onClickMoveToPage} />
  );
}
