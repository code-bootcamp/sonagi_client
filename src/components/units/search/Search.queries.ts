import { gql } from "@apollo/client";

export const FETCH_NOVELS_PAGE = gql`
  query fetchNovelsPage(
    $fetchNovelInput: FetchNovelInput!
    $searchInput: SearchNovelInput
  ) {
    fetchNovelsPage(
      fetchNovelInput: $fetchNovelInput
      searchInput: $searchInput
    ) {
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
