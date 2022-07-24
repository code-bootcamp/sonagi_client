import { useQuery } from "@apollo/client";
import { useState } from "react";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import DonateNovelPresenter from "./DonateNovel.presenter";
import { FETCH_DONATE } from "./DonateNovel.queries";

export default function DonateNovelContainer() {
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_DONATE, { variables: { page: 1 } });
  const [isDonate, setIsDonate] = useState(false);

  console.log(data);

  const onClickDonate = () => {
    setIsDonate(true);
  };

  return (
    <DonateNovelPresenter
      onClickMoveToPage={onClickMoveToPage}
      onClickDonate={onClickDonate}
      data={data}
      point={undefined}
      novel={undefined}
      id={undefined}
      isDonate={isDonate}
      setIsDonate={setIsDonate}
    />
  );
}
