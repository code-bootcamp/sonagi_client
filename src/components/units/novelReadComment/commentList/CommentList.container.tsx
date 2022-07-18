import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import ReadCommentListPresenter from "./CommentList.presenter";

import { FETCH_NOVEL_REVIEW_PAGE } from "./CommentList.queries";

export default function ReadCommentListContainer() {
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
        console.log("하하", fetchMoreResult?.fetchNovelReviewPage.novelRivews);
        if (fetchMoreResult?.fetchNovelReviewPage.novelRivews.length === 0) {
          alert("리뷰가 더이상 없습니다");
          return prev.fetchNovelReviewPage;
        }
        // console.log("패치", fetchMoreResult);
        console.log(prev.fetchNovelReviewPage.novelRivews);
        console.log(fetchMoreResult.fetchNovelReviewPage.novelRivews);
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

  console.log("데이터", data);
  return (
    <ReadCommentListPresenter
      data={data}
      onClickFetchMore={onClickFetchMore}
      refetch={refetch}
    />
  );
}
