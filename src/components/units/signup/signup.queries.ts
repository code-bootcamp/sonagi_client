import { gql } from "@apollo/client/core";

export const CREATE_USER = gql`
  mutation createUser($createUserInput: CreateUserInput!) {
    createUser(createUserInput: $createUserInput) {
      id
      name
      nickName
      email
      phone
      point
      userClass {
        id
      }
      authPhone {
        isAuth
        updateAt
      }
      authEmail {
        isAuth
        updateAt
      }
    }
  }
`;

export const SEND_PHONE = gql`
  mutation SendPhone($phone: String!) {
    SendPhone(phone: $phone)
  }
`;

export const AUTH_PHONE_OK = gql`
  mutation AuthPhoneOK($phoneInput: PhoneInput!) {
    AuthPhoneOK(phoneInput: $phoneInput)
  }
`;
