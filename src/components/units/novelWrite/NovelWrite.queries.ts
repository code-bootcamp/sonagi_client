import { gql } from "@apollo/client";

export const CREATE_NOVEL = gql`
  mutation createNovel($createNovelInput: CreateNovelInput!) {
    createNovel(createNovelInput: $createNovelInput) {
      id
      title
      description
      createAt
      files {
        id
        url
      }
      novelCategory {
        id
        name
      }
      novelTags {
        id
        name
      }
      cycle
    }
  }
`;

export const UPDATE_NOVEL = gql`
  mutation updateNovel($updateNovelInput: UpdateNovelInput!) {
    updateNovel(updateNovelInput: $updateNovelInput) {
      id
      # title
      # description
      # createAt
      # files {
      #   id
      #   url
      # }
      # novelCategory {
      #   id
      #   name
      # }
      # novelTags {
      #   id
      #   name
      # }
    }
  }
`;

export const FETCH_NOVEL_CATEGORYS_ALL = gql`
  query fetchNovelCategorysAll {
    fetchNovelCategorysAll {
      id
      name
    }
  }
`;
