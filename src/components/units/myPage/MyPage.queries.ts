import { gql } from "@apollo/client";

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      nickName
      email
      point
    }
  }
`;

export const FETCH_NOVEL_LIKE = gql`
  query fetchNovelLikeInUser {
    fetchNovelLikeInUser {
      id
      createAt
      novel {
        id
      }
    }
  }
`;
