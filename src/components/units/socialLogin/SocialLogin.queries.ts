import { gql } from "@apollo/client";

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

export const LOGIN_OAUTH = gql`
  mutation LoginOAuth {
    LoginOAuth {
      isSuccess
      msg
    }
  }
`;

export const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreToken {
    restoreToken
  }
`;

export const SOCIAL_AUTH = gql`
  mutation socialAuth($authInput: OAuthInput!) {
    socialAuth(authInput: $authInput) {
      id
      name
      nickName
      email
      phone
      point
    }
  }
`;
