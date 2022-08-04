import { useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import React from "react";
import DetailCommentListPresenter from "./CommentList.presenter";

import { FETCH_NOVEL_REVIEW_PAGE } from "./CommentList.queries";

export default function DetailCommentListContainer() {
  const router = useRouter();

  const { data, fetchMore, refetch } = useQuery(FETCH_NOVEL_REVIEW_PAGE, {
    variables: { novelID: router.query._id },
  });

  // const onClickFetchMore = () => {
  //   setPage((prev) => prev + 1);
  //   refetch();
  // };

  // const onClickFetchMore = () => {
  //   if (!data) return;
  //   fetchMore({
  //     variables: {
  //       page: setPage((prev) => prev + 1),
  //     },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       if (!fetchMoreResult)
  //         return {
  //           prev,
  //         };
  //       return {
  //         page: [prev, fetchMoreResult],
  //       };
  //     },
  //   });
  //   // refetch();
  // };

  const onClickFetchMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data.fetchNovelReviewPage.novelRivews.length / 10) + 1,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (fetchMoreResult?.fetchNovelReviewPage.novelRivews.length === 0) {
          Modal.error({ content: "리뷰가 더이상 없습니다" });
          return prev.fetchNovelReviewPage;
        }

        return {
          fetchNovelReviewPage: {
            novelRivews: [
              ...prev.fetchNovelReviewPage.novelRivews,
              ...fetchMoreResult.fetchNovelReviewPage.novelRivews,
            ],
            count: fetchMoreResult.fetchNovelReviewPage.count,
          },
        };
      },
    });
    // refetch();
  };

  return (
    <DetailCommentListPresenter
      data={data}
      onClickFetchMore={onClickFetchMore}
      refetch={refetch}
    />
  );
}
