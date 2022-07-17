import { gql } from "@apollo/client";

export const FETCH_NOVEL_DONATE = gql`
  query fetchNovelDonateInUser {
    fetchNovelDonateInUser {
      id
      createAt
      user {
        id
        name
        nickName
      }
      novel {
        id
        title
        description
        likeCount
        viewCount
        createAt
        user {
          id
          name
          nickName
        }
        novelCategory {
          id
          name
        }
      }
    }
  }
`;
