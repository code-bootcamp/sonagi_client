import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FETCH_COMMENTS } from "../commentList/CommentList.queries";
import CommentWritePresenter from "./CommentWrite.presenter";
import { CREATE_COMMENT, UPDATE_COMMENT } from "./CommentWrite.queries";

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
            board: String(router.query._id),
          },

          refetchQueries: [
            {
              query: FETCH_COMMENTS,
              // variables: { board: String(router.query._id) },
            },
          ],
          // refetchQueries: [
          //   {
          //     query: FETCH_BOARD,
          //     variables: { boardID: String(router.query._id) },
          //   },
          // ],
        });
        alert("질문을 등록했습니다!!.");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // 수정
  const [updateComment] = useMutation(UPDATE_COMMENT);
  const onClickUpdateComment = async (event) => {
    try {
      const result = await updateComment({
        variables: {
          updateCommentInput: {
            contents,
            id: props.el?.id,
          },
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            // variables: { board: String(router.query._id) },
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

  // 대댓글등록
  const createAnswer = async () => {
    if (contents) {
      await createComment({
        variables: {
          createCommentInput: {
            contents,
            parent: props.el?.id,
          },
          board: String(router.query._id),
        },
        refetchQueries: [
          {
            query: FETCH_COMMENTS,
            // variables: { board: String(router.query._id) },
          },
        ],
      });
      alert("답변을 등록했습니다.");
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
      createAnswer={createAnswer}
    />
  );
}
