import { gql } from "@apollo/client";

export const FETCH_NOVEL_REVIEW_ALL = gql`
  query fetchNovelReviewAll($novel: String!) {
    fetchNovelReviewAll(novel: $novel) {
      id
      contents
      likeCount
      dislikeCount
      star
      createAt
      updateAt
      user {
        id
        nickName
      }
    }
  }
`;

export const DELETE_NOVEL_REVIEW = gql`
  mutation deleteNovelReview($ReviewID: String!) {
    deleteNovelReview(ReviewID: $ReviewID)
  }
`;
