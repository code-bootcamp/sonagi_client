import { gql } from "@apollo/client";

export const FETCH_NOTICES = gql`
  query fetchNoticesAll {
    fetchNoticesAll {
      id
      title
      contents
      isTop
      createAt
      files {
        url
      }
    }
  }
`;

export const DELETE_NOTICE = gql`
  mutation deleteNotice($noticeID: String!) {
    deleteNotice(noticeID: $noticeID) {
      id
      msg
      isSuccess
    }
  }
`;
