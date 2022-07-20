import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import NestedCommentWritePresenter from "./NestedCommentWrite.presenter";
import {
  CREATE_NESTED_COMMENT,
  FETCH_COMMENTS_FROM_BOARD,
} from "./NestedCommentWrite.queries";
import { INestedCommentWriteProps } from "./NestedCommentWrite.types";

export default function NestedCommentWrite(props: INestedCommentWriteProps) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const [createNestedComment] = useMutation(CREATE_NESTED_COMMENT);
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
              query: FETCH_COMMENTS_FROM_BOARD,
              variables: { boardID: String(router.query._id) },
            },
          ],
        },
      });
      alert("대댓글을 등록합니다");
      console.log("대댓글write", result);
    } catch (error) {
      alert(error.message);
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
