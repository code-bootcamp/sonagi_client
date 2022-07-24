import { gql } from "@apollo/client";

export const COMPARE_PASSWORD = gql`
  mutation comparePassword($pwd: String!) {
    comparePassword(pwd: $pwd) {
      id
      msg
      isSuccess
    }
  }
`;
