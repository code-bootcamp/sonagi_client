import NovelPbListPresenter from "./NovelList.presenter";

export default function NovelPbListContainer() {
  const sfEndItem = [11, 12, 13, 14, 15];
  const romanceFantasyEndItem = [21, 22, 23, 24, 25];
  const romancaEndItem = [31, 32, 33, 34, 35];
  const FantasyEndItem = [41, 42, 43, 44, 45];
  const teenageEndItem = [51, 52, 53, 54, 55];
  const horrorEndItem = [61, 62, 63, 64, 65];

  return (
    <NovelPbListPresenter
      sfEndItem={sfEndItem}
      romanceFantasyEndItem={romanceFantasyEndItem}
      romancaEndItem={romancaEndItem}
      FantasyEndItem={FantasyEndItem}
      teenageEndItem={teenageEndItem}
      horrorEndItem={horrorEndItem}
    />
  );
}
