import styled from "@emotion/styled";
import React from "react";
import CommentListContainer from "../../../src/components/units/comment/commentList/CommentList.container";
import CommentWriteContainer from "../../../src/components/units/comment/commentWrite/CommentWrite.container";
import FreeBoardDetailContainer from "../../../src/components/units/freeBoard/freeBoardDetail/FreeBoardDetail.container";
// import NestedCommentListContainer from "../../../src/components/units/nestedComment/list/NestedCommentList.container";

export default function FreeBoardDetailPage() {
  const Wrapper = styled.div`
    margin-bottom: 80px;
  `;
  return (
    <>
      <FreeBoardDetailContainer />
      <Wrapper>
        <CommentWriteContainer />
        <CommentListContainer />
      </Wrapper>
      {/* <NestedCommentListContainer /> */}
    </>
  );
}
