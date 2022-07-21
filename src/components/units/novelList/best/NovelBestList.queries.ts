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
export const CREATE_NOVEL_LIKE = gql`
  mutation createNovelLike($novelID: String!) {
    createNovelLike(novelID: $novelID) {
      id
      createAt
    }
  }
`;

export const FETCH_NOVEL_LIKE = gql`
  query fetchNovelLikeInUser {
    fetchNovelLikeInUser {
      id
      novel {
        id
      }
    }
  }
`;

export const DELETE_NOVEL_LIKE = gql`
  mutation deleteNovelLike($novelLikeID: String!) {
    deleteNovelLike(novelLikeID: $novelLikeID) {
      id
    }
  }
`;
