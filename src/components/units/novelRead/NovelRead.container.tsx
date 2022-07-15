import NovelReadPresenter from "./NovelRead.presenter";
import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import {
  CREATE_BOOK_MARK,
  FETCH_NOVEL_DETAIL,
  FETCH_ONE_NOVEL_INDEX,
} from "./NovelRead.queries";

export default function NovelReadContainer() {
  const router = useRouter();
  const [setDisplay, setIsDisplay] = useState(false);
  // 북마크
  const [createBookmark] = useMutation(CREATE_BOOK_MARK);
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
  const currentPage = readData?.fetchOneNovelIndex.index;
  console.log(indexPage);
  console.log(currentPage); // 5

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
    />
  );
}
