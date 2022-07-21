import { gql } from "@apollo/client";

export const FETCH_NOVEL_REVIEW_PAGE = gql`
  query fetchNovelReviewPage($novelID: String!, $page: Int = 1) {
    fetchNovelReviewPage(novelID: $novelID, page: $page) {
      novelRivews {
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

export const DELETE_NOVEL_REVIEW = gql`
  mutation deleteNovelReview($ReviewID: String!) {
    deleteNovelReview(ReviewID: $ReviewID) {
      id
      msg
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      name
      nickName
      email
      phone
    }
  }
`;
