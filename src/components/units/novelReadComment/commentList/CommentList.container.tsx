import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import ReadCommentListPresenter from "./CommentList.presenter";

import { FETCH_EPISODE_REVIEW_PAGE } from "./CommentList.queries";

export default function ReadCommentListContainer(props) {
  const router = useRouter();

  const { data, fetchMore, refetch } = useQuery(FETCH_EPISODE_REVIEW_PAGE, {
    variables: { episodeID: router.query.volume_id, page: 1 },
  });

  const onClickFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page:
          Math.ceil(data.fetchEpisodeReviewPage.episodeReviews.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        console.log(
          "하하",
          fetchMoreResult?.fetchEpisodeReviewPage.episodeReviews
        );
        if (
          fetchMoreResult?.fetchEpisodeReviewPage.episodeReviews.length === 0
        ) {
          return prev.fetchEpisodeReviewPage;
        }
        // console.log("패치", fetchMoreResult);
        console.log(prev.fetchEpisodeReviewPage.episodeReviews);
        console.log(fetchMoreResult.fetchEpisodeReviewPage.episodeReviews);
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
    // refetch();
  };

  console.log("데이터", data);

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
    />
  );
}
