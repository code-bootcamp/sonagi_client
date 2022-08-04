import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReadCommentListPresenter from "./CommentList.presenter";

import {
  FETCH_EPISODE_DETAIL,
  FETCH_EPISODE_REVIEW_PAGE,
} from "./CommentList.queries";
import { IReadCommentListContainerProps } from "./CommentList.types";

export default function ReadCommentListContainer(
  props: IReadCommentListContainerProps
) {
  const router = useRouter();

  const { data, fetchMore, refetch } = useQuery(FETCH_EPISODE_REVIEW_PAGE, {
    variables: { episodeID: router.query.volume_id, page: 1 },
  });

  const { data: AuthorData } = useQuery(FETCH_EPISODE_DETAIL, {
    variables: { novelIndexID: router.query.volume_id },
  });

  const onClickFetchMore = () => {
    // if (data?.fetchEpisodeReviewPage.episodeReviews.length === 0) return;
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchEpisodeReviewPage.count / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (
          fetchMoreResult?.fetchEpisodeReviewPage.episodeReviews.length === 0
        ) {
          return prev.fetchEpisodeReviewPage;
        }
        return {
          fetchEpisodeReviewPage: {
            episodeReviews: [
              ...prev.fetchEpisodeReviewPage.episodeReviews,
              ...fetchMoreResult.fetchEpisodeReviewPage.episodeReviews,
            ],
            count: fetchMoreResult.fetchEpisodeReviewPage.count,
          },
        };
      },
    });
  };

  // 댓글 등록으로
  const [isGoComment, setIsGoCommnet] = useState(false);
  const onClickGoComment = () => {
    setIsGoCommnet((prev) => !prev);
  };

  // 읽으러가기
  const onClickGoRead = () => {
    props.setCommentClick(false);
  };
  return (
    <ReadCommentListPresenter
      data={data}
      onClickFetchMore={onClickFetchMore}
      refetch={refetch}
      // 댓글로
      onClickGoComment={onClickGoComment}
      isGoComment={isGoComment}
      setIsGoCommnet={setIsGoCommnet}
      // 읽으러
      onClickGoRead={onClickGoRead}
      AuthorData={AuthorData}
    />
  );
}
