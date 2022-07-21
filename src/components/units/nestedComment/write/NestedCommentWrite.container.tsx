import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import NestedCommentWritePresenter from "./NestedCommentWrite.presenter";
import {
  CREATE_NESTED_COMMENT,
  FETCH_COMMENT,
} from "./NestedCommentWrite.queries";
import { INestedCommentWriteProps } from "./NestedCommentWrite.types";

export default function NestedCommentWrite(props: INestedCommentWriteProps) {
  const router = useRouter();
  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };

  const [createNestedComment] = useMutation(CREATE_NESTED_COMMENT);

  // const [isRegistered, setIsRegistered] = useState(true);
  // 대댓글 등록
  const WriteNestedComment = async () => {
    // setIsRegistered(false);
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
              query: FETCH_COMMENT,
              variables: { commentID: router.query._id },
            },
          ],
        },
      });
      alert("대댓글을 등록합니다.");
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
