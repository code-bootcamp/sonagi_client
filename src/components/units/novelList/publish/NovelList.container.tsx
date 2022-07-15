import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import NovelPbListPresenter from "./NovelList.presenter";
import { FETCH_NOVELS_PAGE } from "./NovelList.queries";

export default function NovelPbListContainer() {
  const router = useRouter();

  const sfPbItem = [11, 12, 13, 14, 15];
  const romanceFantasyPbItem = [21, 22, 23, 24, 25];
  const romancaPbItem = [31, 32, 33, 34, 35];
  const FantasyPbItem = [41, 42, 43, 44, 45];
  const teenagePbItem = [51, 52, 53, 54, 55];
  const horrorPbItem = [61, 62, 63, 64, 65];

  const { data } = useQuery(FETCH_NOVELS_PAGE, {
    variables: { page: 1 },
  });
  console.log("소설데이터", data);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${router.query._id}`);
    console.log(event.target);
  };

  return (
    <NovelPbListPresenter
      sfPbItem={sfPbItem}
      romanceFantasyPbItem={romanceFantasyPbItem}
      romancaPbItem={romancaPbItem}
      FantasyPbItem={FantasyPbItem}
      teenagePbItem={teenagePbItem}
      horrorPbItem={horrorPbItem}
      data={data}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
