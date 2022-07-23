import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import MyBoardListPresenter from "./myBoardList.presenter";
import { FETCH_BOARDS, FETCH_COMMENTS } from "./myBoardList.queries";

export default function MyBoardListContainer() {
  const router = useRouter();
  const { data: BoardData } = useQuery(FETCH_BOARDS);
  const { data: CommentData } = useQuery(FETCH_COMMENTS);
  console.log("CommentData", CommentData);
  const [isBoardList, setIsBoardList] = useState(false);
  const onClickMyBordList = () => {
    setIsBoardList(true);
    console.log(isBoardList);
  };
  const onClickMyProductList = () => {
    setIsBoardList(false);
  };
  const onClickMoveToDetail = (el: any) => () => {
    router.push(`/freeBoard/${el.id}`);
  };

  return (
    <MyBoardListPresenter
      BoardData={BoardData}
      CommentData={CommentData}
      isBoardList={isBoardList}
      onClickMyBordList={onClickMyBordList}
      onClickMyProductList={onClickMyProductList}
      onClickMoveToDetail={onClickMoveToDetail}
    />
  );
}
