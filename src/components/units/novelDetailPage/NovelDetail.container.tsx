import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import NovelDetailPresenter from "./NovelDetail.Presenter";
import { DELETE_NOVEL, FETCH_NOVEL_DETAIL } from "./NovelDetail.queries";

export default function NovelDetailContainer() {
  const router = useRouter();
  const [deleteNovel] = useMutation(DELETE_NOVEL);
  const { data: detailData } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });

  console.log(detailData);

  const onClickDelete = async () => {
    try {
      const result = await deleteNovel({
        variables: { novelID: router.query._id },
      });
      alert(result.data.deleteNovel.msg);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToRead = (event) => {
    router.push(`/novel/${router.query._id}/${event.currentTarget.id}`);
    console.log(event.target);
  };

  const onClickMoveToVolumeWrite = () => {
    router.push(`/novel/${router.query._id}/volume/new`);
  };

  return (
    <NovelDetailPresenter
      detailData={detailData}
      onClickDelete={onClickDelete}
      onClickMoveToRead={onClickMoveToRead}
      onClickMoveToVolumeWrite={onClickMoveToVolumeWrite}
    />
  );
}
