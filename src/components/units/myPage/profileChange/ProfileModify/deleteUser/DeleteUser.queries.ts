import { gql } from "@apollo/client";

export const DELETE_USER = gql`
  mutation deleteLoginUser {
    deleteLoginUser {
      id
      msg
      isSuccess
    }
  }
`;
