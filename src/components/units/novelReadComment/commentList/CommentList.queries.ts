import { gql } from "@apollo/client";

export const FETCH_EPISODE_REVIEW_PAGE = gql`
  query fetchEpisodeReviewPage($episodeID: String!, $page: Int!) {
    fetchEpisodeReviewPage(episodeID: $episodeID, page: $page) {
      episodeReviews {
        id
        contents
        likeCount

        star
        createAt
        updateAt
        user {
          id
          nickName
        }
      }
      count
    }
  }
`;

export const DELETE_EPISODE_REVIEW = gql`
  mutation deleteEpisodeReview($ReviewID: String!) {
    deleteEpisodeReview(ReviewID: $ReviewID) {
      id
      msg
    }
  }
`;

export const FETCH_EPISODE_DETAIL = gql`
  query fetchEpisodeDetail($novelIndexID: String!) {
    fetchEpisodeDetail(novelIndexID: $novelIndexID) {
      authorText
    }
  }
`;
