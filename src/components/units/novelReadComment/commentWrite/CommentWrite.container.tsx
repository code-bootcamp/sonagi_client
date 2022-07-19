import { useMutation } from "@apollo/client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  CREATE_EPISODE_REVIEW,
  UPDATE_EPISODE_REVIEW,
} from "./CommentWrite.queries";
import * as yup from "yup";
import ReadCommentWritePresenter from "./CommentWrite.presenter";
import { FETCH_EPISODE_REVIEW_PAGE } from "../commentList/CommentList.queries";

const schema = yup.object({
  contents: yup.string().required("리뷰를 입력해주세요."),
});

export default function ReadCommentWriteContainer(props) {
  // 댓글등록
  const router = useRouter();
  const [click, setClick] = useState(false);
  const [createEpisodeReview] = useMutation(CREATE_EPISODE_REVIEW);
  const [updateEpisodeReview] = useMutation(UPDATE_EPISODE_REVIEW);

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickComment = async (data) => {
    if (data.contents) {
      try {
        const result = await createEpisodeReview({
          variables: {
            createEpisodeReviewInput: {
              contents: data.contents,
              star: 1,
              episodeID: router.query.volume_id,
            },
          },
          refetchQueries: [
            {
              query: FETCH_EPISODE_REVIEW_PAGE,
              variables: { episodeID: router.query.volume_id, page: 1 },
            },
          ],
        });
        props.setIsGoCommnet(false);
        reset();
        alert("댓글을 등록했습니다.");
        console.log("질문등록", result);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  const onClickUpdateComment = async (data) => {
    if (data.contents) {
      try {
        const result = await updateEpisodeReview({
          variables: {
            updateEpisodeReviewInput: {
              id: props.el.id,
              contents: data.contents,
              star: 1,
            },
          },
          refetchQueries: [
            {
              query: FETCH_EPISODE_REVIEW_PAGE,
              variables: { episodeID: router.query.volume_id, page: 1 },
            },
          ],
        });
        console.log(result);
        alert("수정 완료");
        props.setIsEdit((prev) => !prev);
      } catch (error) {
        alert(error.message);
      }
    }
  };

  // 댓글 리스트로
  const onClickGoList = () => {
    props.setIsGoCommnet(false);
  };

  return (
    <ReadCommentWritePresenter
      onClickComment={onClickComment}
      onClickUpdateComment={onClickUpdateComment}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
      isEdit={props.isEdit}
      el={props.el}
      click={click}
      setClick={setClick}
      onClickGoList={onClickGoList}
    />
  );
}
