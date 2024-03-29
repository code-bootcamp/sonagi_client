import { useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { MouseEvent, useState } from "react";
import { FETCH_NOVEL_LIKE_IN_USER } from "../novelRead/NovelRead.queries";
import NovelDetailPresenter from "./NovelDetail.Presenter";
import {
  CHANGE_PRIVATE_NOVEL_INDEX,
  DELETE_NOVEL,
  DELETE_NOVEL_INDEX,
  FETCH_LOGIN_USER,
  FETCH_NOVEL_DETAIL,
  PAIDPOINT,
  PAID_POINTS,
  SWITCH_NOVEL_LIKE,
} from "./NovelDetail.queries";
import { ICheckListEl, Iel, INovelEl } from "./NovelDetail.types";

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default function NovelDetailContainer() {
  const router = useRouter();

  const [switchPrivate, setSwitchPrivate] = useState(false);
  const [deleteNovel] = useMutation(DELETE_NOVEL);
  const [deleteNovelIndex] = useMutation(DELETE_NOVEL_INDEX);
  const [paidPoint] = useMutation(PAIDPOINT);
  const [paidPonts] = useMutation(PAID_POINTS);
  const [switchNovelLike] = useMutation(SWITCH_NOVEL_LIKE);
  const [changePrivateNovelIndex] = useMutation(CHANGE_PRIVATE_NOVEL_INDEX);
  const { data: LoginData } = useQuery(FETCH_LOGIN_USER);

  const { data: detailData, loading } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: {
      novelID: router.query._id,
      userEmail: LoginData?.fetchLoginUser.email,
    },
  });

  // 소설 삭제
  const onClickDelete = async () => {
    try {
      const result = await deleteNovel({
        variables: { novelID: router.query._id },
      });
      Modal.success({ content: result.data.deleteNovel.msg });
      router.push("/novel/list/publish");
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 회차 읽기
  const onClickMoveToRead = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/novel/${router.query._id}/${event.currentTarget.id}`);
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
        refetchQueries: [
          {
            query: FETCH_NOVEL_DETAIL,
            variables: {
              novelID: router.query._id,
              userEmail: LoginData?.fetchLoginUser.email,
            },
          },
        ],
      });

      Modal.success({ content: "결제 성공" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 후원하기
  const [isDonate, setIsDonate] = useState(false);

  const novelID = router.query._id;
  const onClickDonate = async () => {
    setIsDonate((prev) => !prev);
  };

  // 선호작 등록하기
  const { data: likeData, refetch } = useQuery(FETCH_NOVEL_LIKE_IN_USER);
  const HeartList = likeData?.fetchNovelLikeInUser.map(
    (el: Iel) => el.novel.id
  );
  const NovelId = router.query._id;
  const Heart = HeartList?.includes(NovelId);

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
            variables: {
              novelID: router.query._id,
              userEmail: LoginData?.fetchLoginUser.email,
            },
          },
        ],
      });
      refetch();
      Modal.success({ content: result.data?.switchNovelLike.msg });
      setIsSubmitting(false);
    } catch (error: any) {
      Modal.error({ content: error.message });
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
      Modal.success({ content: result.data?.deleteNovelIndex.msg });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 수정하기
  const onClickEdit = () => {
    router.push(`/novel/${router.query._id}/edit`);
  };

  // 에피소드 비공개
  const onClickPrivate = async (event: MouseEvent<HTMLDivElement>) => {
    try {
      await changePrivateNovelIndex({
        variables: { novelIndexID: event.currentTarget.id },
      });
      Modal.success({ content: "비공개" });
      setSwitchPrivate(true);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 1권 부터
  const [isFirst, setIsFirst] = useState(true);
  const onClickFirst = () => {
    setIsFirst((prev) => !prev);
  };

  // 첫화 보기
  const oneIndex = detailData?.fetchNovelDetail.novelIndexs?.length;
  const viewOne = detailData?.fetchNovelDetail.novelIndexs[oneIndex - 1]?.id;
  const onClickFirstView = () => {
    router.push(`/novel/${router.query._id}/${viewOne}`);
  };

  // 체크박스
  const [checkList, setCheckList] = useState<any>([]);
  const dataList = detailData?.fetchNovelDetail.novelIndexs;

  const buyList = dataList?.filter(
    (el: INovelEl) => !el.isBuy && el.index > 3 && !el.isNotice
  );

  const onClickCheckAll = () => {
    if (checkList.length !== buyList.length) {
      setCheckList(buyList);
    } else {
      setCheckList([]);
    }
  };

  const onCheckedItem = (el: any) => {
    // 모든 원소가 조건에 맞으면 true (checkLis에 값이 없음)
    if (checkList.every((cur: INovelEl) => cur?.id !== el?.id)) {
      setCheckList([...checkList, el]);
    } else {
      // 체크된것만 제외하고 배열에 담는다.
      const result = checkList.filter((cur: INovelEl) => cur?.id !== el?.id);
      setCheckList(result);
    }
  };

  const isChecked = (el: any) => {
    return checkList.some((cur: any) => cur?.id === el?.id);
  };

  const onClickEditEpisode = (event: MouseEvent<HTMLDivElement>) => {
    router.push(`/novel/${router.query._id}/${event.currentTarget.id}/edit`);
  };

  // 선택 결제
  const selectNovelIndexIDs = checkList.map((el: ICheckListEl) => el.id);

  const onClickSelectPayment = async () => {
    try {
      await paidPonts({
        variables: { novelIndexIDs: selectNovelIndexIDs },
        refetchQueries: [
          {
            query: FETCH_NOVEL_DETAIL,
            variables: {
              novelID: router.query._id,
              userEmail: LoginData?.fetchLoginUser.email,
            },
          },
        ],
      });
      Modal.success({ content: "결제 성공" });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  return loading ? (
    <Loading />
  ) : (
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
      // 찜하기
      Heart={Heart}
      // 첫화 보기
      onClickFirstView={onClickFirstView}
      // 수정하기
      onClickEditEpisode={onClickEditEpisode}
      setIsEdit={undefined}
      isEdit={undefined}
      // 체크박스
      onClickCheckAll={onClickCheckAll}
      onCheckedItem={onCheckedItem}
      isChecked={isChecked}
      checkList={checkList}
      buyList={buyList}
      // 결제
      onClickSelectPayment={onClickSelectPayment}
    />
  );
}
