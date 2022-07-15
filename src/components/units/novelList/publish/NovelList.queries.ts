import { gql } from "@apollo/client";

// export const FETCH_NOVELS_PAGE = gql`
//   query fetchNovelsPage($page: Int!) {
//     fetchNovelsPage(page: $page) {
//       novels {
//         title
//       }
//     }
//   }
// `;

export const FETCH_NOVELS_PAGE = gql`
  query fetchNovelsPage($page: Int!) {
    fetchNovelsPage(page: $page) {
      novels {
        title
        user {
          nickName
        }
        files {
          url
        }
      }
    }
  }
`;
