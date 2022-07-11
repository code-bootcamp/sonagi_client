import NovelListPresenter from "./NovelList.presenter";

export default function NovelListContainer() {
  const sfPbItem = [11, 12, 13, 14, 15];
  const romanceFantasyPbItem = [21, 22, 23, 24, 25];
  const romancaPbItem = [31, 32, 33, 34, 35];
  const FantasyPbItem = [41, 42, 43, 44, 45];
  const teenagePbItem = [51, 52, 53, 54, 55];
  const horrorPbItem = [61, 62, 63, 64, 65];

  return (
    <NovelListPresenter
      sfPbItem={sfPbItem}
      romanceFantasyPbItem={romanceFantasyPbItem}
      romancaPbItem={romancaPbItem}
      FantasyPbItem={FantasyPbItem}
      teenagePbItem={teenagePbItem}
      horrorPbItem={horrorPbItem}
    />
  );
}
