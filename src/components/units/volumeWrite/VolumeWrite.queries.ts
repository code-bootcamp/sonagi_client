import { gql } from "@apollo/client";

export const CREATE_NOVEL_INDEX = gql`
  mutation createNovelIndex($input: CreateNovelIndexInput!) {
    createNovelIndex(input: $input) {
      id
      title
      contents
      index
      authorText
      # createAt
      # novel {
      #   id
      #   title
      #   description
      # }
    }
  }
`;

export const FETCH_NOVEL_DETAIL = gql`
  query fetchNovelDetail($novelID: String!) {
    fetchNovelDetail(novelID: $novelID) {
      title
    }
  }
`;

export const UPDATE_NOVEL_INDEX = gql`
  mutation updateNovelIndex($input: UpdateNovelIndexInput!) {
    updateNovelIndex(input: $input) {
      id
      title
      contents
    }
  }
`;
