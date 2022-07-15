import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import NovelDetailPresenter from "./NovelDetail.Presenter";
import {
  CHANGE_PRIVATE_NOVEL_INDEX,
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
  const [switchPrivate, setSwitchPrivate] = useState(false);
  const [deleteNovel] = useMutation(DELETE_NOVEL);
  const [deleteNovelIndex] = useMutation(DELETE_NOVEL_INDEX);
  const [paidPoint] = useMutation(PAIDPOINT);
  const [donatePoint] = useMutation(DONATEPOINT);
  const [createNovelLike] = useMutation(CREATE_NOVEL_LIKE);
  const [changePrivateNovelIndex] = useMutation(CHANGE_PRIVATE_NOVEL_INDEX);
  const { data: detailData } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });

  console.log(detailData);

  // 소설 삭제
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

  // 회차 읽기
  const onClickMoveToRead = (event) => {
    router.push(`/novel/${router.query._id}/${event.currentTarget.id}`);
    console.log(event.target);
  };

  // 회차 쓰기
  const onClickMoveToVolumeWrite = () => {
    router.push(`/novel/${router.query._id}/volume/new`);
  };

  // 결제하기
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

  // 후원하기
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

  // 선호작 등록하기
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

  // 회차 삭제
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

  // 수정하기
  const onClickEdit = () => {
    router.push(`/novel/${router.query._id}/edit`);
  };

  // 에피소드 비공개
  const onClickPrivate = async (event) => {
    try {
      const result = await changePrivateNovelIndex({
        variables: { novelIndexID: event.currentTarget.id },
      });
      console.log(result);
      alert("비공개");
      setSwitchPrivate(true);
    } catch (error) {
      alert(error.message);
    }
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
      onClickEdit={onClickEdit}
      onClickPrivate={onClickPrivate}
      switchPrivate={switchPrivate}
    />
  );
}
