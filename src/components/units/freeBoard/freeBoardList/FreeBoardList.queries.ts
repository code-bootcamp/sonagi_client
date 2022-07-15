import { gql } from "@apollo/client";

export const FETCH_BOARDS_ALL = gql`
  query fetchBoardsAll {
    fetchBoardsAll {
      id
      title
      contents
      viewCount
      createAt
      user {
        nickName
      }
    }
  }
`;

export const FETCH_BOARD_ALL_COUNT = gql`
  query fetchBoardAllCount {
    fetchBoardAllCount {
      data
    }
  }
`;
