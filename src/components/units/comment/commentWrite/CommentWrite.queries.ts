import { gql } from "@apollo/client";

export const CREATE_COMMENT = gql`
  mutation createComment(
    $board: String!
    $createCommentInput: CreateCommentInput!
  ) {
    createComment(board: $board, createCommentInput: $createCommentInput) {
      id
      contents
      user {
        nickName
      }
    }
  }
`;
