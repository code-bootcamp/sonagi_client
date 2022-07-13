import NovelBestListPresenter from "./NovelBestList.presenter";

export default function NovelBestListContainer() {
  const itemimg = [
    11, 12, 13, 14, 15, 21, 22, 23, 24, 25, 31, 32, 33, 34, 35, 41, 42, 43, 44,
    45, 51, 52, 53, 54, 55, 61, 62, 63, 64, 65,
  ];

  return <NovelBestListPresenter itemimg={itemimg} />;
}
