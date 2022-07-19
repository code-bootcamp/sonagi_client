import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import RecentWatchPresenter from "./RecentWatch.presenter";

export default function RecentWatchContainer() {
  const [basketItems, setBasketItmes] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("baskets")) || [];
    setBasketItmes(items);
  }, []);

  function onClickMoveToNovelDetail(event: { currentTarget: { id: any } }) {
    router.push(`/novel/${event.currentTarget.id}`);
  }

  return (
    <RecentWatchPresenter
      onClickMoveToNovelDetail={onClickMoveToNovelDetail}
      basketItems={basketItems}
    />
  );
}
