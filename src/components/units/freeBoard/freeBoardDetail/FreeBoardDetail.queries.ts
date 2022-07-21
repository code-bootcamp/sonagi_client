import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardID: String!) {
    fetchBoard(boardID: $boardID) {
      id
      title
      contents
      createAt
      user {
        id
        nickName
      }
      files {
        id
        url
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
