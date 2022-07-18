import { gql } from "@apollo/client";

export const FETCH_FIN_NOVELS_PAGE = gql`
  query fetchNovelFinsPageLastOrder($page: Int!) {
    fetchNovelFinsPageLastOrder(page: $page) {
      novels {
        id
        title
        description
        cycle
        user {
          nickName
        }
        novelCategory {
          name
        }
        files {
          url
        }
      }
    }
  }
`;
