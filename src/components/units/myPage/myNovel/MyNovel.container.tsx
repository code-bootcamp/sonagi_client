import { useQuery } from "@apollo/client";
import { useState } from "react";
import useMoveToPage from "../../../../commons/hooks/UseMoveToPage";
import MyNovelPresenter from "./MyNovel.presenter";
import { FETCH_MY_NOVELS } from "./MyNovel.queries";

export default function MyNovelContainer() {
  const [myNovel, setMyNovel] = useState(false);
  const { onClickMoveToPage } = useMoveToPage();
  const { data } = useQuery(FETCH_MY_NOVELS);
  console.log(data);

  const onClickMyNovel = () => {
    setMyNovel(true);
  };

  return (
    <MyNovelPresenter
      data={data}
      onClickMyNovel={onClickMyNovel}
      onClickMoveToPage={onClickMoveToPage}
      setMyNovel={setMyNovel}
      myNovel={myNovel}
    />
  );
}
