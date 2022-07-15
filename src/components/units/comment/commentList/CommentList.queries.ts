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
    deleteComment(CommentID: $CommentID)
  }
`;

export const FETCH_COMMENTS = gql`
  query fetchComments {
    fetchComments {
      id
      contents
      createAt
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
