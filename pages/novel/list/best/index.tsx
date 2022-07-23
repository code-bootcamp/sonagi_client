import NovelBestListContainer from "../../../../src/components/units/novelList/best/NovelBestList.container";

export default function NovelEndListPage() {
  return (
    <NovelBestListContainer
      el={undefined}
      onClickMoveToDetail={function (el: any): (event: any) => void {
        throw new Error("Function not implemented.");
      }}
      HeartList={function (): void {
        throw new Error("Function not implemented.");
      }}
      onClickLike={function (el: any): () => Promise<void> {
        throw new Error("Function not implemented.");
      }}
    />
  );
}
