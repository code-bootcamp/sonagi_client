import { gql } from "@apollo/client";

export const CREATE_NOVEL_REVIEW = gql`
  mutation createNovelReview(
    $createReviewInput: CreateNovelReviewInput!
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
