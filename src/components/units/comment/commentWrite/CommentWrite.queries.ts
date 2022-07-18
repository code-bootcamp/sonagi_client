import { gql } from "@apollo/client";

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

export const FETCH_BOARD = gql`
  query fetchBoard($boardID: String) {
    fetchBoard(boardID: $boardID) {
      comments {
        id
        contents
        createAt
        user {
          nickName
        }
      }
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput) {
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

export const FETCH_COMMENTS = gql`
  query fetchComments {
    fetchComments {
      id
      contents
    }
  }
`;
