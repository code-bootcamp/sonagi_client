import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation Login($loginInput: LoginInput!) {
    Login(loginInput: $loginInput)
  }
`;
