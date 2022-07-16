import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import DetailCommentWritePresenter from "./CommentWrite.presenter";
import { CREATE_NOVEL_REVIEW } from "./CommentWrite.queries";

export default function DetailCommentWriteContainer(props) {
  // 댓글등록
  const router = useRouter();
  const [star, setStar] = useState(0);
  const [contents, setContents] = useState("");
  const onChangeContents = (event: any) => {
    setContents(event.target.value);
  };
  const [createNovelReview] = useMutation(CREATE_NOVEL_REVIEW);
  const onClickComment = async () => {
    if (contents) {
      try {
        const result = await createNovelReview({
          variables: {
            createReviewInput: {
              contents,
              star,
            },
            novel: router.query._id,
          },
          // refetchQueries: [
          //   {
          //     query: FETCH_COMMENTS,
          //     variables: { board: String(router.query._id) },
          //   },
          // ],
        });
        alert("리뷰를 등록했습니다.");
        console.log("질문등록", result);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <DetailCommentWritePresenter
      onClickComment={onClickComment}
      onChangeContents={onChangeContents}
      setStar={setStar}
      star={star}
      // isEdit={props.isEdit}
      // el={props.el}
    />
  );
}
