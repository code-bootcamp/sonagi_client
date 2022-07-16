import { useQuery } from "@apollo/client";
import { useState } from "react";
import MyNovelPresenter from "./MyNovel.presenter";
import { FETCH_MY_NOVELS } from "./MyNovel.queries";

export default function MyNovelContainer() {
  const [myNovel, setMyNovel] = useState(false);
  const { data } = useQuery(FETCH_MY_NOVELS);
  console.log(data);

  const onClickMyNovel = () => {
    setMyNovel(true);
  };

  return (
    <MyNovelPresenter
      data={data}
      onClickMyNovel={onClickMyNovel}
      setMyNovel={setMyNovel}
      myNovel={myNovel}
    />
  );
}
