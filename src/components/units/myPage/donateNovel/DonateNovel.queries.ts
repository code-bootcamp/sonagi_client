import { gql } from "@apollo/client";

export const FETCH_DONATE = gql`
  query fetchDonatePoints($page: Int!) {
    fetchDonatePoints(page: $page) {
      id
      point
      createAt
      novel {
        id
        title
        user {
          id
          nickName
          userClass {
            id
          }
        }
        files {
          id
          name
          path
          url
        }
      }
      user {
        id
        name
        nickName
      }
    }
  }
`;
