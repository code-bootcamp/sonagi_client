import { gql } from "@apollo/client";

export const FETCH_EPISODE_DETAIL = gql`
  query fetchEpisodeDetail($novelIndexID: String!) {
    fetchEpisodeDetail(novelIndexID: $novelIndexID) {
      id
      title
      contents
      index
      authorText
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

export const SWITCH_BOOK_MARK = gql`
  mutation switchBookmark($novelIndexID: String!, $page: Float!) {
    switchBookmark(novelIndexID: $novelIndexID, page: $page) {
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

export const SWITCH_NOVEL_LIKE = gql`
  mutation switchNovelLike($novelID: String!) {
    switchNovelLike(novelID: $novelID) {
      id
      msg
      isSuccess
    }
  }
`;

export const FETCH_NOVEL_LIKE_IN_USER = gql`
  query fetchNovelLikeInUser {
    fetchNovelLikeInUser {
      id
      novel {
        id
      }
    }
  }
`;

export const FETCH_BOOK_MARKS_IN_USER = gql`
  query fetchBookmarksInUser {
    fetchBookmarksInUser {
      id
    }
  }
`;
