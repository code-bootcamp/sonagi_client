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

export const TOGGLE_BOOK_MARK = gql`
  mutation toggleBookmark($createBookmarkInput: CreateBookmarkDto!) {
    toggleBookmark(createBookmarkInput: $createBookmarkInput) {
      msg
      id
    }
  }
`;

export const FETCH_EPISODE_REVIEW_PAGE = gql`
  query fetchEpisodeReviewPage($episodeID: String!, $page: Int!) {
    fetchEpisodeReviewPage(episodeID: $episodeID, page: $page) {
      count
    }
  }
`;
