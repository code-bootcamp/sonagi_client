import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import CommentWritePresenter from "./CommentWrite.presenter";
import {
  CREATE_COMMENT,
  FETCH_COMMENTS_FROM_BOARD,
  UPDATE_COMMENT,
} from "./CommentWrite.queries";

export default function CommentWriteContainer(props) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  // 등록
  const [createComment] = useMutation(CREATE_COMMENT);
  const onClickRegisterComment = async () => {
    if (contents) {
      try {
        await createComment({
          variables: {
            createCommentInput: {
              contents,
            },
            boardID: String(router.query._id),
          },

          refetchQueries: [
            {
              query: FETCH_COMMENTS_FROM_BOARD,
              variables: { boardID: String(router.query._id) },
            },
          ],
        });
        alert("질문을 등록했습니다!!.");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // 수정
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const onClickUpdateComment = () => {
    try {
      if (!contents) {
        alert("내용이 수정되지 않았습니다");
        return;
      }
      const result = updateComment({
        variables: {
          updateCommentInput: {
            contents,
            id: props.el?.id,
          },
        },

        refetchQueries: [
          {
            query: FETCH_COMMENTS_FROM_BOARD,
            variables: { boardID: String(router.query._id) },
          },
        ],
      });
      console.log("질문수정", result);
      props.setIsEdit?.(false);
      alert("댓글을 수정합니다");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <CommentWritePresenter
      onClickRegisterComment={onClickRegisterComment}
      onChangeContents={onChangeContents}
      isEdit={props.isEdit}
      el={props.el}
      contents={contents}
      onClickUpdateComment={onClickUpdateComment}
      isAnswer={props.isAnswer}
      isAnswerEdit={props.isAnswerEdit}
    />
  );
}
