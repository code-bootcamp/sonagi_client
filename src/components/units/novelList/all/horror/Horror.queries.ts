import { gql } from "@apollo/client";

export const FETCH_NOVELS_PAGE = gql`
  query fetchNovelsPage($fetchNovelInput: FetchNovelInput!) {
    fetchNovelsPage(fetchNovelInput: $fetchNovelInput) {
      novels {
        id
        title
        description
        cycle
        novelCategory {
          id
          name
        }
        files {
          url
        }
        user {
          nickName
        }
      }
      count
    }
  }
`;
