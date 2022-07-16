import { gql } from "@apollo/client";

export const FETCH_EPISODE_DETAIL = gql`
  query fetchEpisodeDetail($novelIndexID: String!) {
    fetchEpisodeDetail(novelIndexID: $novelIndexID) {
      id
      title
      contents
      index
    }
  }
`;

export const FETCH_NOVEL_DETAIL = gql`
  query fetchNovelDetail($novelID: String!) {
    fetchNovelDetail(novelID: $novelID) {
      title
      novelIndexs {
        id
        index
      }
    }
  }
`;

export const CREATE_BOOK_MARK = gql`
  mutation createBookmark($novelIndexID: String!, $page: Float!) {
    createBookmark(novelIndexID: $novelIndexID, page: $page) {
      id
      page
      createAt
    }
  }
`;
