import { gql } from "@apollo/client";

export const CREATE_NOTICE = gql`
  mutation createNotice($createNoticeInput: CreateNoticeInput!) {
    createNotice(createNoticeInput: $createNoticeInput) {
      id
      title
      contents
      isTop
      createAt
      files {
        id
        url
      }
    }
  }
`;
