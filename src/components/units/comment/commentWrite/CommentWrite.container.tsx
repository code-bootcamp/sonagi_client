import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FETCH_COMMENTS } from "../commentList/CommentList.queries";
import CommentWritePresenter from "./CommentWrite.presenter";
import { CREATE_COMMENT } from "./CommentWrite.queries";

export default function CommentWriteContainer(props) {
  // 댓글등록
  const router = useRouter();
  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };
  const [createComment] = useMutation(CREATE_COMMENT);
  const onClickRegisterComment = async () => {
    if (contents) {
      try {
        const result = await createComment({
          variables: {
            createCommentInput: {
              contents,
            },
            board: String(router.query._id),
          },
          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              variables: { board: String(router.query._id) },
            },
          ],
        });
        alert("질문을 등록했습니다.");
        console.log("질문등록", result);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <CommentWritePresenter
      onClickRegisterComment={onClickRegisterComment}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
