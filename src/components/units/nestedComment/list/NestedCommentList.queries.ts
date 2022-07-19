import { gql } from "@apollo/client";

export const FETCH_NESTED_COMMENTS = gql`
  query fetchCommentsFromBoard($boardID: String!) {
    fetchCommentsFromBoard(boardID: $boardID) {
      id
      contents
      createAt
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
