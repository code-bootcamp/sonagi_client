import { gql } from "@apollo/client";

export const CREATE_NOVEL_INDEX = gql`
  mutation createNovelIndex($createNovelIndexInput: CreateNovelIndexInput!) {
    createNovelIndex(createNovelIndexInput: $createNovelIndexInput) {
      id
      title
      contents
      index
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
