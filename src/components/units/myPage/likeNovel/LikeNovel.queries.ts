import { gql } from "@apollo/client";

export const FETCH_NOVEL_LIKE = gql`
  query fetchNovelLikeInUser {
    fetchNovelLikeInUser {
      id
      createAt
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
        files {
          id
          name
          path
          url
        }
      }
    }
  }
`;
