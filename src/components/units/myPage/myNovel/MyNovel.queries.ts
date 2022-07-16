import { gql } from "@apollo/client";

export const FETCH_MY_NOVELS = gql`
  query fetchMyNovels($page: Int) {
    fetchMyNovels(page: $page) {
      novels {
        id
        title
        description
        likeCount
        viewCount
        createAt
        novelIndexs {
          id
          title
          contents
          index
        }
        novelCategory {
          id
          name
        }
        novelTags {
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
      count
    }
  }
`;
