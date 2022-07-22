import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      id
      title
      contents
      createAt
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
      createAt
      user {
        nickName
      }
    }
  }
`;

export const DELETE_BOARD = gql`
  mutation deleteBoard($BoardID: String!) {
    deleteBoard(BoardID: $BoardID) {
      id
    }
  }
`;
