import { useRouter } from "next/router";

import SchoolPresenter from "./School.presenter";
import { FETCH_NOVELS_PAGE } from "./School.queries";
import { useQuery } from "@apollo/client";

export default function SchoolContainer() {
  const router = useRouter();

  const { data: PbSchool } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "5dfca982-fed3-4be2-aa10-aa7f001d5607",
        order: "LAST",
        isFinish: "FALSE",
        page: 1,
      },
    },
  });

  const { data: FinSchool } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "5dfca982-fed3-4be2-aa10-aa7f001d5607",
        order: "LAST",
        isFinish: "TRUE",
        page: 1,
      },
    },
  });

  const onClickMoveToDetail = (el: any) => (event: any) => {
    router.push(`/novel/${event.currentTarget?.id}`);
  };

  return (
    <SchoolPresenter
      onClickMoveToDetail={onClickMoveToDetail}
      PbSchool={PbSchool}
      FinSchool={FinSchool}
    />
  );
}
