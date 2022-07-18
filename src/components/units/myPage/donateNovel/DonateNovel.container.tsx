import { useQuery } from "@apollo/client";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import DonateNovelPresenter from "./DonateNovel.presenter";
import { FETCH_NOVEL_DONATE } from "./DonateNovel.queries";

export default function DonateNovelContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_NOVEL_DONATE);
  // const { data } = useQuery(FETCH_DONATE_POINTS, { variables: { page: 1 } });

  console.log(data);

  return <DonateNovelPresenter onClickMoveToPage={onClickMoveToPage} />;
}
