import { gql } from "@apollo/client";

export const FETCH_NOVEL_DETAIL = gql`
  query fetchNovelDetail($novelID: String!) {
    fetchNovelDetail(novelID: $novelID) {
      id
      title
      description
      likeCount
      viewCount
      createAt
      updateAt
      user {
        name
        nickName
      }
      novelCategory {
        name
      }
      novelTags {
        id
        name
      }
      files {
        id
        name
        url
      }
    }
  }
`;

export const DELETE_NOVEL = gql`
  mutation deleteNovel($novelID: String!) {
    deleteNovel(novelID: $novelID) {
      id
      msg
      isSuccess
    }
  }
`;
