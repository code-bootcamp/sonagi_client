import { gql } from "@apollo/client";

export const FETCH_ONE_NOVEL_INDEX = gql`
  query fetchOneNovelIndex($novelIndexID: String!) {
    fetchOneNovelIndex(novelIndexID: $novelIndexID) {
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
