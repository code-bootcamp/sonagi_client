import NovelReadPresenter from "./NovelRead.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOOK_MARK,
  FETCH_EPISODE_DETAIL,
  FETCH_EPISODE_REVIEW_PAGE,
  FETCH_NOVEL_DETAIL,
} from "./NovelRead.queries";

export default function NovelReadContainer() {
  const router = useRouter();
  const [setDisplay, setIsDisplay] = useState(false);
  // 북마크
  const [createBookmark] = useMutation(CREATE_BOOK_MARK);
  const { data: readData } = useQuery(FETCH_EPISODE_DETAIL, {
    variables: { novelIndexID: router.query.volume_id },
  });
  console.log(readData);
  const { data: novelData } = useQuery(FETCH_NOVEL_DETAIL, {
    variables: { novelID: router.query._id },
  });

  const { data: commentData } = useQuery(FETCH_EPISODE_REVIEW_PAGE, {
    variables: { episodeID: router.query.volume_id, page: 1 },
  });

  const onClickMoveToMain = () => {
    router.push("/");
  };

  const onClickDisplay = () => {
    setIsDisplay((prev) => !prev);
  };

  // useEffect(
  //   () =>
  //     window.addEventListener("copy", (e) => {
  //       alert("보안 정책에 의해 복사를 허용하지 않습니다.");
  //       e.preventDefault();
  //       // window.clipboardData.clearData("Text");
  //     }),
  //   [window.addEventListener]
  // );

  // 이전화 다음화
  const indexPage = novelData?.fetchNovelDetail.novelIndexs
    .map((el) => el.id)
    .reverse();
  const currentPage = readData?.fetchEpisodeDetail.index;
  // console.log(indexPage);
  // console.log(currentPage); // 5

  const onClickMoveToList = () => {
    router.push(`/novel/${router.query._id}`);
  };

  const onClickMoveToPrevPage = () => {
    if (currentPage === 1) {
      alert("처음 화 입니다");
      return;
    }
    router.push(`/novel/${router.query._id}/${indexPage[currentPage - 2]}`);
  };

  const onClickMoveToNextPage = () => {
    if (currentPage === indexPage.length) {
      alert("마지막 화 입니다");
      return;
    }
    router.push(`/novel/${router.query._id}/${indexPage[currentPage]}`);
  };

  // 북마크
  const onClickBookMark = async () => {
    try {
      await createBookmark({
        variables: {
          novelIndexID: router.query.volume_id,
          page: 1,
        },
      });
      alert("북마크 성공!");
    } catch (error) {
      alert(error.message);
    }
  };

  // 사이즈업
  const [size, setSize] = useState(1);
  const onClickSizeUp = () => {
    if (size > 5) {
      alert("최대 사이즈 입니다.");
      return;
    }
    setSize((prev) => prev + 1);
  };

  const onClickSizeDown = () => {
    if (size === 1) {
      alert("최소 사이즈 입니다");
      return;
    }
    setSize((prev) => prev - 1);
  };

  // 댓글로 가기
  const [commentClick, setCommentClick] = useState(false);
  const onClickComment = () => {
    setCommentClick(true);
  };

  // 우클릭 방지
  // const onClickRight = (e: MouseEvent) => {
  //   e.preventDefault();
  // };

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
      // onClickRight={onClickRight}
      // 세팅으로
      // onClickSetting={onClickSetting}
      // setting={setting}
    />
  );
}
