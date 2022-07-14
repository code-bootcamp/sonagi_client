import { gql } from "@apollo/client";

export const UPDATE_USER_PWD = gql`
  mutation updateUserPwd($pwd: String!) {
    updateUserPwd(pwd: $pwd) {
      id
      msg
      isSuccess
    }
  }
`;
