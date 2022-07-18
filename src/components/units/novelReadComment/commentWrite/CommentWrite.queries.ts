import { gql } from "@apollo/client";

export const CREATE_EPISODE_REVIEW = gql`
  mutation createEpisodeReview(
    $createEpisodeReviewInput: CreateNovelIndexReviewInput!
    $novel: String!
  ) {
    createNovelReview(createReviewInput: $createReviewInput, novel: $novel) {
      id
      contents
      star
      createAt
      updateAt
    }
  }
`;

export const UPDATE_NOVEL_REVIEW = gql`
  mutation updateNovelReview($updateNovelReviewInput: UpdateNovelReviewInput!) {
    updateNovelReview(updateNovelReviewInput: $updateNovelReviewInput) {
      id
      contents
    }
  }
`;
