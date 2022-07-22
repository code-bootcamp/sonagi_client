import { gql } from "@apollo/client";

export const FETCH_NOVELS_PAGE = gql`
  query fetchNovelsPage($fetchNovelInput: FetchNovelInput!) {
    fetchNovelsPage(fetchNovelInput: $fetchNovelInput) {
      novels {
        id
        title
        likeCount
        cycle
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
        user {
          id
          name
          nickName
        }
      }
    }
  }
`;
