import { gql } from "@apollo/client";

export const COMPARE_PASSWORD = gql`
  query comparePassword($pwd: String!) {
    comparePassword(pwd: $pwd) {
      id
      msg
      isSuccess
    }
  }
`;
