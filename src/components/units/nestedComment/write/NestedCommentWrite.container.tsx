import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import NestedCommentWritePresenter from "./NestedCommentWrite.presenter";
import { CREATE_COMMENT, FETCH_COMMENTS } from "./NestedCommentWrite.queries";

export default function NestedCommentWrite(props) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const [createNestedComment] = useMutation(CREATE_COMMENT);
  const WriteNestedComment = async (data) => {
    try {
      const result = await createNestedComment({
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
          },
        ],
      });
      console.log("대댓글", result);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <NestedCommentWritePresenter
      onChangeContents={onChangeContents}
      WriteNestedComment={WriteNestedComment}
      contents={contents}
    />
  );
}
