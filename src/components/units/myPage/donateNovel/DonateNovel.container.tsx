import { useQuery } from "@apollo/client";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import DonateNovelPresenter from "./DonateNovel.presenter";
import { FETCH_NOVEL_DONATE } from "./DonateNovel.queries";

export default function DonateNovelContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_NOVEL_DONATE);

  console.log(data);

  return <DonateNovelPresenter onClickMoveToPage={onClickMoveToPage} />;
}
