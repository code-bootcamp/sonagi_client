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
