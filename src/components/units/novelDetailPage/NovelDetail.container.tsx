import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { MouseEvent, useState } from "react";
import NovelDetailPresenter from "./NovelDetail.Presenter";
import {
  CHANGE_PRIVATE_NOVEL_INDEX,
  DELETE_NOVEL,
  DELETE_NOVEL_INDEX,
  FETCH_LOGIN_USER,
  FETCH_NOVEL_DETAIL,
  PAIDPOINT,
  SWITCH_NOVEL_LIKE,
} from "./NovelDetail.queries";

export default function NovelDetailContainer() {
  const router = useRouter();

  const [switchPrivate, setSwitchPrivate] = useState(false);
  const [deleteNovel] = useMutation(DELETE_NOVEL);
  const [deleteNovelIndex] = useMutation(DELETE_NOVEL_INDEX);
  const [paidPoint] = useMutation(PAIDPOINT);
  const [switchNovelLike] = useMutation(SWITCH_NOVEL_LIKE);
  const [changePrivateNovelIndex] = useMutation(CHANGE_PRIVATE_NOVEL_INDEX);
  const { data: detailData } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });
  const { data: LoginData } = useQuery(FETCH_LOGIN_USER);

  console.log("디테일", detailData?.fetchNovelDetail.user.id);
  console.log("로그인", LoginData?.fetchLoginUser.id);

  // 소설 삭제
  const onClickDelete = async () => {
    try {
      const result = await deleteNovel({
        variables: { novelID: router.query._id },
      });
      alert(result.data.deleteNovel.msg);
      router.push("/novel/list/publish");
    } catch (error) {
      alert(error);
    }
  };

  // 회차 읽기
  const onClickMoveToRead = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/novel/${router.query._id}/${event.currentTarget.id}`);
    console.log(event.target);
  };

  // 회차 쓰기
  const onClickMoveToVolumeWrite = () => {
    router.push(`/novel/${router.query._id}/volume/new`);
  };

  // 결제하기
  const onClickPayment = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await paidPoint({
        variables: { novelIndexID: event.currentTarget.id },
      });

      alert("결제 성공");
    } catch (error) {
      alert(error);
    }
  };

  // 후원하기
  const [isDonate, setIsDonate] = useState(false);

  const novelID = router.query._id;
  const onClickDonate = async () => {
    setIsDonate((prev) => !prev);
  };

  // 선호작 등록하기
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onClickLike = async () => {
    setIsSubmitting(true);
    try {
      const result = await switchNovelLike({
        variables: {
          novelID: router.query._id,
        },

        refetchQueries: [
          {
            query: FETCH_NOVEL_DETAIL,
            variables: { novelID: router.query._id },
          },
        ],
      });

      console.log("선호작", result);
      alert(result.data?.switchNovelLike.msg);
      setIsSubmitting(false);
    } catch (error) {
      alert(error);
    }
  };

  // 회차 삭제
  const onClickIndexDelete = async (event: MouseEvent<HTMLDivElement>) => {
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
      alert(error);
    }
  };

  // 수정하기
  const onClickEdit = () => {
    router.push(`/novel/${router.query._id}/edit`);
  };

  // 에피소드 비공개
  const onClickPrivate = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      const result = await changePrivateNovelIndex({
        variables: { novelIndexID: event.currentTarget.id },
      });
      console.log(result);
      alert("비공개");
      setSwitchPrivate(true);
    } catch (error) {
      alert(error);
    }
  };

  // 1권 부터
  const [isFirst, setIsFirst] = useState(false);
  const onClickFirst = () => {
    setIsFirst((prev) => !prev);
  };

  // 첫화 보기
  const oneIndex = detailData?.fetchNovelDetail.novelIndexs?.length;
  const viewOne = detailData?.fetchNovelDetail.novelIndexs[oneIndex - 1]?.id;
  const onClickFirstView = () => {
    router.push(`/novel/${router.query._id}/${viewOne}`);
  };

  // // 체크박스
  // const [checkList, setCheckList] = useState([]);
  // const dataList = detailData?.fetchNovelDetail.novelIndexs;

  // const onClickCheckAll = () => {
  //   if (checkList.length !== dataList.length) {
  //     setCheckList(dataList);
  //   } else {
  //     setCheckList([]);
  //   }
  // };

  // const onCheckedItem = (list) => {
  //   // 모든 원소가 조건에 맞으면 true (checkLis에 값이 없음)
  //   if (checkList.every((cur) => cur.id !== list.id)) {
  //     setCheckList([...checkList, list]);
  //   } else {
  //     // 체크된것만 제외하고 배열에 담는다.
  //     const result = checkList.filter((cur) => cur.id !== list.id);
  //     setCheckList(result);
  //   }
  // };

  // const isChecked = (list) => {
  //   return checkList.some((cur) => cur.id === list.id);
  // };

  return (
    <NovelDetailPresenter
      novelID={novelID}
      detailData={detailData}
      LoginData={LoginData}
      onClickDelete={onClickDelete}
      onClickMoveToRead={onClickMoveToRead}
      onClickMoveToVolumeWrite={onClickMoveToVolumeWrite}
      onClickPayment={onClickPayment}
      onClickDonate={onClickDonate}
      onClickLike={onClickLike}
      onClickIndexDelete={onClickIndexDelete}
      onClickEdit={onClickEdit}
      onClickPrivate={onClickPrivate}
      switchPrivate={switchPrivate}
      onClickFirst={onClickFirst}
      isFirst={isFirst}
      isDonate={isDonate}
      setIsDonate={setIsDonate}
      isSubmitting={isSubmitting}
      // 첫화 보기
      onClickFirstView={onClickFirstView}
      // 체크박스
      // onClickCheckAll={onClickCheckAll}
      // onCheckedItem={onCheckedItem}
      // isChecked={isChecked}
      // dataList={dataList}
      // checkList={checkList}
    />
  );
}
