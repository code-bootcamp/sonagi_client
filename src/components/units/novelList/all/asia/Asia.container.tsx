import { useRouter } from "next/router";
import AsiaPresenter from "./Asia.presenter";
import { FETCH_NOVELS_PAGE } from "./Asia.queries";
import { useQuery } from "@apollo/client";
import { MouseEvent } from "react";

export default function AsiaContainer() {
  const router = useRouter();

  const { data: PbAsia } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "48133761-446e-4433-bbe7-4bd32771122f",
        order: "LAST",
        isFinish: "FALSE",
        page: 1,
      },
    },
  });

  const { data: FinAsia } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "48133761-446e-4433-bbe7-4bd32771122f",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  const onClickMoveToDetail =
    (el: any) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/novel/${event.currentTarget.id}`);
    };

  return (
    <AsiaPresenter
      onClickMoveToDetail={onClickMoveToDetail}
      PbAsia={PbAsia}
      FinAsia={FinAsia}
    />
  );
}
