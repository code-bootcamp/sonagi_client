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
        target: "74ca7d6a-f00d-43cb-8554-f0426a29cefb",
        order: "LAST",
        isFinish: false,
        page: 1,
      },
    },
  });
  console.log("소설데이터", PbSchool);

  const { data: FinSchool } = useQuery(FETCH_NOVELS_PAGE, {
    variables: {
      fetchNovelInput: {
        type: "CATEGORY",
        target: "74ca7d6a-f00d-43cb-8554-f0426a29cefb",
        order: "LAST",
        isFinish: true,
        page: 1,
      },
    },
  });
  console.log("소설데이터", FinSchool);

  const onClickMoveToDetail = (event: any) => {
    router.push(`/novel/${event.currentTarget.id}`);
    console.log(event.target);
  };

  return (
    <SchoolPresenter
      onClick={onClickMoveToDetail}
      PbSchool={PbSchool}
      FinSchool={FinSchool}
    />
  );
}
