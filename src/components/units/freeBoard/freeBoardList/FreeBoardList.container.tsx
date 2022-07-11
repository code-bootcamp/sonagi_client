import { useRouter } from "next/router";
import React from "react";
import FreeBoardListPresenter from "./FreeBoardList.presenter";

export default function FreeBoardListContainer() {
  const router = useRouter();
  const onClickMoveToFreeBoardWrite = () => {
    router.push("/freeBoard/new");
  };

  return (
    <FreeBoardListPresenter
      onClickMoveToFreeBoardWrite={onClickMoveToFreeBoardWrite}
    />
  );
}
