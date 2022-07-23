import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import NestedCommentWritePresenter from "./NestedCommentWrite.presenter";
import {
  CREATE_NESTED_COMMENT,
  FETCH_COMMENTS_FROM_BOARDD,
} from "./NestedCommentWrite.queries";
import { INestedCommentWriteProps } from "./NestedCommentWrite.types";

export default function NestedCommentWrite(props: INestedCommentWriteProps) {
  const router = useRouter();
  // const { data } = useQuery(FETCH_BOARD);
  // console.log("대댓글리페치왜안될까......", data);
  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const [createNestedComment] = useMutation(CREATE_NESTED_COMMENT);

  // 대댓글 등록
  const WriteNestedComment = async () => {
    try {
      const result = await createNestedComment({
        variables: {
          createCommentInput: {
            contents,
            parentID: props.el?.id,
          },
          boardID: String(router.query._id),

          refetchQueries: [
            {
              query: FETCH_COMMENTS_FROM_BOARDD,
              variables: { page: 1, boardID: String(router.query._id) },
            },
          ],
        },
      });
      // alert("대댓글을 등록합니다.");
      Modal.success({ content: "대댓글을 등록합니다." });
      console.log("대댓글write", result);
    } catch (error: any) {
      // alert(error.message);
      Modal.error({ content: error.message });
    }
  };

  return (
    <NestedCommentWritePresenter
      onChangeContents={onChangeContents}
      WriteNestedComment={WriteNestedComment}
      contents={contents}
      el={undefined}
    />
  );
}
