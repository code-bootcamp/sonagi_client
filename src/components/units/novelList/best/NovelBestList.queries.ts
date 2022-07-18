import { gql } from "@apollo/client";

export const FETCH_PB_BEST_NOVELS_PAGE = gql`
  query fetchNovelCyclesPageLikeOrder($page: Int!) {
    fetchNovelCyclesPageLikeOrder(page: $page) {
      novels {
        id
        title
        description
        likeCount
        viewCount
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
