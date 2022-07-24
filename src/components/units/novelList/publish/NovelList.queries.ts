import { gql } from "@apollo/client";

export const FETCH_NOVELS_PAGE = gql`
  query fetchNovelsPage($fetchNovelInput: FetchNovelInput!) {
    fetchNovelsPage(fetchNovelInput: $fetchNovelInput) {
      novels {
        id
        title
        description
        likeCount
        viewCount
        cycle
        isFinish
        user {
          id
          name
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
