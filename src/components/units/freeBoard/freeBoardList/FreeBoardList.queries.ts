import { gql } from "@apollo/client";

export const FETCH_BOARDS_ALL = gql`
  query fetchBoardsAll {
    fetchBoardsAll {
      id
      title
      contents
      viewCount
      createAt
    }
  }
`;
