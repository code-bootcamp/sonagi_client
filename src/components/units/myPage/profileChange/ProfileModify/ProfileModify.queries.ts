import { gql } from "@apollo/client";

export const UPDATE_LOGIN_USER = gql`
  mutation updateLoginUser($updateInput: UpdateUserInput!) {
    updateLoginUser(updateInput: $updateInput) {
      id
      msg
      isSuccess
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      nickName
      email
      name
    }
  }
`;
