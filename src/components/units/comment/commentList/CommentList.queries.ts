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
    }
  }
`;
