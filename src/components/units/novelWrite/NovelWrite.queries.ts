import { gql } from "@apollo/client";

export const CREATE_NOVEL = gql`
  mutation createNovel($createNovelInput: CreateNovelInput!) {
    createNovel(createNovelInput: $createNovelInput) {
      id
      title
      description
      createAt
    }
  }
`;
