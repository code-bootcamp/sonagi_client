import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FETCH_NOVEL_REVIEW_PAGE } from "../commentList/CommentList.queries";
import DetailCommentWritePresenter from "./CommentWrite.presenter";
import {
  CREATE_NOVEL_REVIEW,
  UPDATE_NOVEL_REVIEW,
} from "./CommentWrite.queries";
import * as yup from "yup";
import { Idata, IDetailCommentWriteContainerProps } from "./CommentWrite.types";
import { Modal } from "antd";

const schema = yup.object({
  contents: yup.string().required("리뷰를 입력해주세요."),
  star: yup.number().required("별점을 입력해주세요."),
});

export default function DetailCommentWriteContainer(
  props: IDetailCommentWriteContainerProps
) {
  // 댓글등록
  const router = useRouter();
  const [click, setClick] = useState(false);
  const [star, setStar] = useState(0);
  const [createNovelReview] = useMutation(CREATE_NOVEL_REVIEW);
  const [updateNovelReview] = useMutation(UPDATE_NOVEL_REVIEW);

  const { register, handleSubmit, formState, reset, setValue, trigger } =
    useForm({
      resolver: yupResolver(schema),
      mode: "onChange",
    });

  const onChagneStar = (value: number) => {
    setStar(value);
    setClick(true);
    setValue("star", value);
    trigger("star");
  };

  const onClickComment = async (data: Idata) => {
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
              query: FETCH_NOVEL_REVIEW_PAGE,
              variables: { novelID: router.query._id },
            },
          ],
        });
        reset();
        setStar(0);
        Modal.success({ content: "리뷰를 등록했습니다." });
        console.log("질문등록", result);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };

  useEffect(() => {
    if (props.el?.star) {
      setStar(props.el?.star);
    }
    setValue("star", props.el?.star);
    trigger("star");
  }, [props.el]);

  const onClickUpdateComment = async (data: Idata) => {
    console.log("el", props.el);

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
          refetchQueries: [
            {
              query: FETCH_NOVEL_REVIEW_PAGE,
              variables: {
                novelID: router.query._id,
              },
            },
          ],
        });
        console.log(result);
        Modal.success({ content: "수정 완료" });
        props.setIsEdit((prev) => !prev);
      } catch (error: any) {
        Modal.error({ content: error.message });
      }
    }
  };

  return (
    <DetailCommentWritePresenter
      onClickComment={onClickComment}
      handleSubmit={handleSubmit}
      onClickUpdateComment={onClickUpdateComment}
      setStar={setStar}
      star={star}
      register={register}
      formState={formState}
      onChagneStar={onChagneStar}
      isEdit={props.isEdit}
      el={props.el}
      click={click}
      setClick={setClick}
    />
  );
}
