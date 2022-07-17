import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FETCH_NOVEL_REVIEW_ALL } from "../commentList/CommentList.queries";
import DetailCommentWritePresenter from "./CommentWrite.presenter";
import {
  CREATE_NOVEL_REVIEW,
  UPDATE_NOVEL_REVIEW,
} from "./CommentWrite.queries";
import * as yup from "yup";

const schema = yup.object({
  contents: yup.string().required("리뷰를 입력해주세요."),
  star: yup.number().required("별점을 입력해주세요."),
});

export default function DetailCommentWriteContainer(props) {
  // 댓글등록
  const router = useRouter();
  const [star, setStar] = useState(0);
  const [createNovelReview] = useMutation(CREATE_NOVEL_REVIEW);
  const [updateNovelReview] = useMutation(UPDATE_NOVEL_REVIEW);

  const { register, handleSubmit, formState, reset, setValue, trigger } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChagneStar = (value) => {
    setStar(value);

    setValue("star", value);
    trigger("star");
  };

  const onClickComment = async (data) => {
    if (data.contents) {
      try {
        const result = await createNovelReview({
          variables: {
            createReviewInput: {
              contents: data.contents,
              star: Number(data.star),
            },
            novel: router.query._id,
          },
          refetchQueries: [
            {
              query: FETCH_NOVEL_REVIEW_ALL,
              variables: { novel: router.query._id },
            },
          ],
        });
        reset();
        setStar(0);
        alert("리뷰를 등록했습니다.");
        console.log("질문등록", result);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdateComment = async (data) => {
    if (data.contents) {
      try {
        const result = await updateNovelReview({
          variables: {
            updateNovelReviewInput: {
              id: props.el.id,
              contents: data.contents,
              star: data.star,
            },
          },
        });
        console.log(result);
        alert("수정 완료");
        props.setIsEdit((prev) => !prev);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <DetailCommentWritePresenter
      onClickComment={onClickComment}
      onClickUpdateComment={onClickUpdateComment}
      setStar={setStar}
      star={star}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      onChagneStar={onChagneStar}
      isEdit={props.isEdit}
      el={props.el}
    />
  );
}
