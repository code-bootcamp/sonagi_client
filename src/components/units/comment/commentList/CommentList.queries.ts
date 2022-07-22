import { gql } from "@apollo/client";

export const UPDATE_COMMENT = gql`
  mutation updateComment($updateCommentInput: UpdateCommentInput!) {
    updateComment(updateCommentInput: $updateCommentInput) {
      id
      contents
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($CommentID: String!) {
    deleteComment(CommentID: $CommentID) {
      id
    }
  }
`;

export const FETCH_COMMENTS = gql`
  query fetchComments {
    fetchComments {
      id
      contents
      createAt
      likeCount
      user {
        nickName
      }
    }
  }
`;

export const FETCH_COMMENT = gql`
  query fetchComment($commentID: String!) {
    fetchComment(commentID: $commentID) {
      id
      contents
      createAt
      user {
        nickName
      }
    }
  }
`;

export const FETCH_COMMENTS_ALL = gql`
  query fetchCommentsAll {
    fetchCommentsAll {
      id
      contents
      user {
        nickName
      }
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardID: String!) {
    fetchBoard(boardID: $boardID) {
      comments {
        id
        contents
        createAt
        user {
          id
          nickName
        }
        children {
          id
          contents
        }
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
      likeCount
    }
  }
`;

export const FETCH_COMMENTS_FROM_BOARD = gql`
  query fetchCommentsFromBoard($boardID: String!) {
    fetchCommentsFromBoard(boardID: $boardID) {
      id
      contents
      user {
        nickName
      }
      createAt
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      name
      nickName
      email
      phone
    }
  }
`;
