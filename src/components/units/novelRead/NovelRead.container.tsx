import NovelReadPresenter from "./NovelRead.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  FETCH_BOOK_MARKS_IN_USER,
  FETCH_EPISODE_DETAIL,
  FETCH_EPISODE_REVIEW_PAGE,
  FETCH_NOVEL_DETAIL,
  FETCH_NOVEL_LIKE_IN_USER,
  SWITCH_BOOK_MARK,
  SWITCH_NOVEL_LIKE,
} from "./NovelRead.queries";
import { Iel, ILikeEl } from "./NovelRead.types";
import { Modal } from "antd";

export default function NovelReadContainer() {
  const router = useRouter();
  const [setDisplay, setIsDisplay] = useState(false);
  // 북마크
  const [switchBookmark] = useMutation(SWITCH_BOOK_MARK);
  const { data: markData } = useQuery(FETCH_BOOK_MARKS_IN_USER);
  // 찜하기
  const [switchNovelLike] = useMutation(SWITCH_NOVEL_LIKE);
  const { data: readData } = useQuery(FETCH_EPISODE_DETAIL, {
    variables: { novelIndexID: router.query.volume_id },
  });
  const { data: novelData } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });
  const { data: commentData } = useQuery(FETCH_EPISODE_REVIEW_PAGE, {
    variables: { episodeID: router.query.volume_id, page: 1 },
  });
  const { data: likeData } = useQuery(FETCH_NOVEL_LIKE_IN_USER);

  const onClickMoveToMain = () => {
    router.push("/");
  };

  const onClickDisplay = () => {
    setIsDisplay((prev) => !prev);
  };

  // 이전화 다음화
  const indexPage = novelData?.fetchNovelDetail.novelIndexs
    .map((el: Iel) => el.id)
    .reverse();
  const currentPage = readData?.fetchEpisodeDetail.index;
  // console.log(indexPage);
  // console.log(currentPage); // 5

  const onClickMoveToList = () => {
    router.push(`/novel/${router.query._id}`);
  };

  const onClickMoveToPrevPage = () => {
    if (currentPage === 1) {
      Modal.warning({ content: "처음 화 입니다" });
      return;
    }
    router.push(`/novel/${router.query._id}/${indexPage[currentPage - 2]}`);
  };

  const onClickMoveToNextPage = () => {
    if (currentPage === indexPage.length) {
      Modal.warning({ content: "마지막 화 입니다" });
      return;
    }
    router.push(`/novel/${router.query._id}/${indexPage[currentPage]}`);
  };

  // 북마크
  const MarkList = markData?.fetchBookmarksInUser.map((el: any) => el.id);
  const [ismark, setIsmark] = useState(false);
  // const Mark = MarkList?.includes(NovelId)
  const onClickBookMark = async () => {
    try {
      const result = await switchBookmark({
        variables: {
          novelIndexID: router.query.volume_id,
          page: 1,
        },
      });
      Modal.success({ content: result.data.switchBookmark.msg });
      console.log(MarkList?.includes(result.data.switchBookmark.id));
      console.log(result.data.switchBookmark.id);
      setIsmark((prev) => !prev);
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 선호작 등록하기

  const HeartList = likeData?.fetchNovelLikeInUser.map(
    (el: ILikeEl) => el.novel.id
  );
  const NovelId = router.query._id;
  const Heart = HeartList?.includes(NovelId);

  const onClickLike = async () => {
    try {
      const result = await switchNovelLike({
        variables: {
          novelID: router.query._id,
        },
        refetchQueries: [
          {
            query: FETCH_NOVEL_LIKE_IN_USER,
          },
        ],
      });
      Modal.success({ content: result.data?.switchNovelLike.msg });
    } catch (error: any) {
      Modal.error({ content: error.message });
    }
  };

  // 사이즈업
  const [size, setSize] = useState(13);
  const onClickSizeUp = () => {
    if (size > 40) {
      Modal.warning({ content: "최대 사이즈 입니다." });
      return;
    }
    setSize((prev) => prev + 4);
  };

  const onClickSizeDown = () => {
    if (size < 14) {
      Modal.warning({ content: "최소 사이즈 입니다" });
      return;
    }
    setSize((prev) => prev - 4);
  };

  // 댓글로 가기
  const [commentClick, setCommentClick] = useState(false);
  const onClickComment = () => {
    setCommentClick(true);
  };

  // 우클릭 방지
  const onClickRight = (event: MouseEvent) => {
    event.preventDefault();
  };

  // // 세팅
  // const [setting, setSetting] = useState(false);
  // const onClickSetting = () => {
  //   setSetting((prev) => !prev);
  // };
  return (
    <NovelReadPresenter
      onClickMoveToMain={onClickMoveToMain}
      onClickDisplay={onClickDisplay}
      setDisplay={setDisplay}
      readData={readData}
      novelData={novelData}
      onClickMoveToList={onClickMoveToList}
      onClickMoveToPrevPage={onClickMoveToPrevPage}
      onClickMoveToNextPage={onClickMoveToNextPage}
      // 북마크
      onClickBookMark={onClickBookMark}
      ismark={ismark}
      // 사이즈 업,다운
      onClickSizeDown={onClickSizeDown}
      onClickSizeUp={onClickSizeUp}
      size={size}
      setSize={setSize}
      // 댓글로 가기
      commentClick={commentClick}
      setCommentClick={setCommentClick}
      onClickComment={onClickComment}
      commentData={commentData}
      // 우클릭 방지
      onClickRight={onClickRight}
      // 선호작
      onClickLike={onClickLike}
      HeartList={HeartList}
      NovelId={NovelId}
      Heart={Heart}
      // 세팅으로
      // onClickSetting={onClickSetting}
      // setting={setting}
    />
  );
}
