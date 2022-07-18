import { gql } from "@apollo/client";

export const FETCH_COMMENTS = gql`
  query fetchComments {
    fetchComments {
      id
      contents
      user {
        nickName
      }
      children {
        id
        contents
      }
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment(
    $board: String!
    $createCommentInput: CreateCommentInput!
  ) {
    createComment(board: $board, createCommentInput: $createCommentInput) {
      id
      contents
      board {
        id
      }
      user {
        nickName
      }
    }
  }
`;

export const FETCH_COMMENT = gql`
  query fetchComment($commentID: String!) {
    fetchComment(commentID: $commentID) {
      children {
        id
      }
    }
  }
`;
