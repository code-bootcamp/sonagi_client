import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import NestedCommentWritePresenter from "./NestedCommentWrite.presenter";
import {
  CREATE_NESTED_COMMENT,
  FETCH_BOARD,
  UPDATE_NESTED_COMMENT,
} from "./NestedCommentWrite.queries";
import { INestedCommentWriteProps } from "./NestedCommentWrite.types";

export default function NestedCommentWrite(props: INestedCommentWriteProps) {
  const router = useRouter();
  useQuery(FETCH_BOARD);
  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };
  const [isHidden, setIsHidden] = useState(false);

  const [createNestedComment] = useMutation(CREATE_NESTED_COMMENT);

  // 대댓글 등록
  const WriteNestedComment = async () => {
    setIsHidden(true);
    try {
      await createNestedComment({
        variables: {
          createCommentInput: {
            contents,
            parentID: props.el?.id,
          },
          boardID: String(router.query._id),
        },
        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardID: String(router.query._id) },
          },
        ],
      });
      // alert("대댓글을 등록합니다.");
      Modal.success({ content: "대댓글을 등록합니다." });
    } catch (error: any) {
      // alert(error.message);
      Modal.error({ content: error.message });
    }
  };

  // 대댓글수정
  const [updateComment] = useMutation(UPDATE_NESTED_COMMENT);
  const onClickUpdateNestedComment = async () => {
    try {
      if (!contents) {
        Modal.error({ content: "수정한 내용이 없습니다" });
        return;
      }
      await updateComment({
        variables: {
          updateCommentInput: {
            contents,
            id: props.answerEL?.id,
          },
        },

        refetchQueries: [
          {
            query: FETCH_BOARD,
            variables: { boardID: String(router.query._id) },
          },
        ],
      });
      props.setIsEdit?.(false);
      Modal.success({ content: "대댓글을 수정합니다." });
    } catch (error: any) {
      Modal.error({ content: "대댓글 수정에 실패했습니다." });
    }
  };

  return (
    <NestedCommentWritePresenter
      onChangeContents={onChangeContents}
      onClickUpdateNestedComment={onClickUpdateNestedComment}
      WriteNestedComment={WriteNestedComment}
      contents={contents}
      el={undefined}
      isEdit={undefined}
      setIsEdit={undefined}
      isHidden={isHidden}
      answerEL={props.answerEL}
      onClickUpdateComment={undefined}
    />
  );
}
