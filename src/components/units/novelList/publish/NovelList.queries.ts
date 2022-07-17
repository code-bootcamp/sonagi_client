import { gql } from "@apollo/client";

export const FETCH_PB_NOVELS_PAGE = gql`
  query fetchNovelCyclesPageLastOrder($page: Int!) {
    fetchNovelCyclesPageLastOrder(page: $page) {
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
