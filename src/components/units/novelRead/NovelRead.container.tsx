import NovelReadPresenter from "./NovelRead.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import { FETCH_NOVEL_DETAIL, FETCH_ONE_NOVEL_INDEX } from "./NovelRead.queries";

export default function NovelReadContainer() {
  const router = useRouter();
  const [setDisplay, setIsDisplay] = useState(false);
  const { data: readData } = useQuery(FETCH_ONE_NOVEL_INDEX, {
    variables: { novelIndexID: router.query.volume_id },
  });
  const { data: novelData } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });

  const onClickMoveToMain = () => {
    router.push("/");
  };

  const onClickDisplay = () => {
    setIsDisplay((prev) => !prev);
  };

  // window.addEventListener("copy", (e) => {
  //   alert("보안 정책에 의해 복사를 허용하지 않습니다.");
  //   e.preventDefault();
  //   e.clipboardData.clearData("Text");
  // });

  return (
    <NovelReadPresenter
      onClickMoveToMain={onClickMoveToMain}
      onClickDisplay={onClickDisplay}
      setDisplay={setDisplay}
      readData={readData}
      novelData={novelData}
    />
  );
}
