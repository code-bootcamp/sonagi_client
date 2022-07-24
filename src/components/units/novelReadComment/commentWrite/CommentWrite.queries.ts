import { gql } from "@apollo/client";

export const CREATE_EPISODE_REVIEW = gql`
  mutation createEpisodeReview(
    $createEpisodeReviewInput: CreateNovelIndexReviewInput!
  ) {
    createEpisodeReview(createEpisodeReviewInput: $createEpisodeReviewInput) {
      id
      contents
      star
      createAt
      updateAt
    }
  }
`;

export const UPDATE_EPISODE_REVIEW = gql`
  mutation updateEpisodeReview(
    $updateEpisodeReviewInput: UpdateNovelIndexReviewInput!
  ) {
    updateEpisodeReview(updateEpisodeReviewInput: $updateEpisodeReviewInput) {
      contents
    }
  }
`;
