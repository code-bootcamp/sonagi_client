import React from "react";
import CommentListContainer from "../../src/components/units/comment/commentList/CommentList.container";
import CommentWriteContainer from "../../src/components/units/comment/commentWrite/CommentWrite.container";
import FreeBoardDetailContainer from "../../src/components/units/freeBoard/freeBoardDetail/FreeBoardDetail.container";

export default function FreeBoardDetailPage() {
  return (
    <>
      <FreeBoardDetailContainer />
      <CommentWriteContainer />
      <CommentListContainer />
    </>
  );
}
