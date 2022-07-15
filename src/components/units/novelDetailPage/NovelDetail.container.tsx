import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NovelDetailPresenter from "./NovelDetail.Presenter";
import {
  CREATE_NOVEL_LIKE,
  DELETE_NOVEL,
  DELETE_NOVEL_INDEX,
  DONATEPOINT,
  FETCH_NOVEL_DETAIL,
  PAIDPOINT,
} from "./NovelDetail.queries";

export default function NovelDetailContainer() {
  const router = useRouter();
  const [donate, setDonate] = useState();
  const [deleteNovel] = useMutation(DELETE_NOVEL);
  const [deleteNovelIndex] = useMutation(DELETE_NOVEL_INDEX);
  const [paidPoint] = useMutation(PAIDPOINT);
  const [donatePoint] = useMutation(DONATEPOINT);
  const [createNovelLike] = useMutation(CREATE_NOVEL_LIKE);
  const { data: detailData } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });

  // console.log(detailData);

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

  const onClickPayment = async (event) => {
    console.log(event.target.id);
    try {
      await paidPoint({
        variables: { novelIndexID: event.currentTarget.id },
      });

      alert("결제 성공");
    } catch (error) {
      alert(error.message);
    }
  };

  const onChangeDonate = (event) => {
    setDonate(event.target.value);
    console.log(event.target.value);
  };

  const onClickDonate = async () => {
    try {
      const result = await donatePoint({
        variables: {
          donateInput: {
            novelID: router.query._id,
            point: Number(donate),
          },
        },
      });
      console.log(result);
      alert("후원 감사합니데이~~!");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickLike = async () => {
    try {
      const result = await createNovelLike({
        variables: {
          novelID: router.query._id,
        },
      });
      console.log(result);
      alert("선호작가!!");
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickIndexDelete = async (event) => {
    try {
      const result = await deleteNovelIndex({
        variables: { novelIndexID: event.currentTarget.id },
        refetchQueries: [
          {
            query: FETCH_NOVEL_DETAIL,
            variables: { novelID: router.query._id },
          },
        ],
      });
      console.log(result);
      alert(result.data?.deleteNovelIndex.msg);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickUpdate = () => {
    router.push(`/novel/${router.query._id}/edit`);
  };

  return (
    <NovelDetailPresenter
      detailData={detailData}
      onClickDelete={onClickDelete}
      onClickMoveToRead={onClickMoveToRead}
      onClickMoveToVolumeWrite={onClickMoveToVolumeWrite}
      onClickPayment={onClickPayment}
      onClickDonate={onClickDonate}
      onChangeDonate={onChangeDonate}
      onClickLike={onClickLike}
      onClickIndexDelete={onClickIndexDelete}
      onClickUpdate={onClickUpdate}
    />
  );
}
