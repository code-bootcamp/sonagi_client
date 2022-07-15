import { gql } from "@apollo/client";

export const FETCH_BOARD = gql`
  query fetchBoard($boardID: String!) {
    fetchBoard(boardID: $boardID) {
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
