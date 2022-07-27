import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import NestedCommentWritePresenter from "./NestedCommentWrite.presenter";
import {
  CREATE_NESTED_COMMENT,
  FETCH_BOARD,
} from "./NestedCommentWrite.queries";
import { INestedCommentWriteProps } from "./NestedCommentWrite.types";

export default function NestedCommentWrite(props: INestedCommentWriteProps) {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD);
  console.log("대댓글리페치......", data);
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
      const result = await createNestedComment({
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
      console.log("대댓글write", result);
    } catch (error: any) {
      // alert(error.message);
      Modal.error({ content: error.message });
    }
  };

  // 대댓글수정
  // const [updateComment] = useMutation(UPDATE_COMMENT);
  // const onClickUpdateComment = async () => {
  //   try {
  //     if (!contents) {
  //       alert("내용이 수정되지 않았습니다.");
  //       return;
  //     }
  //     const result = await updateComment({
  //       variables: {
  //         updateCommentInput: {
  //           contents,
  //           id: data?.fetchBoard.comments[0].children[0].id,
  //         },
  //       },

  //       refetchQueries: [
  //         {
  //           query: FETCH_BOARD,
  //           variables: { boardID: String(router.query._id) },
  //         },
  //       ],
  //     });
  //     console.log("대댓수정", result);
  //     props.setIsEdit?.(false);
  //     Modal.success({ content: "댓글을 수정합니다." });
  //   } catch (error: any) {
  //     Modal.error({ content: "댓글 수정에 실패했습니다." });
  //   }
  // };

  return (
    <NestedCommentWritePresenter
      onChangeContents={onChangeContents}
      WriteNestedComment={WriteNestedComment}
      contents={contents}
      el={undefined}
      isEdit={undefined}
      setIsEdit={undefined}
      isHidden={isHidden}
      onClickUpdateComment={undefined} // onClickUpdateComment={onClickUpdateComment}
    />
  );
}
