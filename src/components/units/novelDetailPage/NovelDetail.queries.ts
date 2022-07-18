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
      cycle
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
      novelIndexs {
        id
        title
        contents
        index
        createAt
        updateAt
        viewCount
        star
        isFinish
        isNotice
        isPrivate
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

export const PAIDPOINT = gql`
  mutation paidPoint($novelIndexID: String!) {
    paidPoint(novelIndexID: $novelIndexID) {
      id
      point
      createAt
    }
  }
`;

export const DONATEPOINT = gql`
  mutation donatePoint($donateInput: DonatePaymentPointInput!) {
    donatePoint(donateInput: $donateInput) {
      id
      point
      createAt
      status {
        id
        description
      }
    }
  }
`;

export const CREATE_NOVEL_LIKE = gql`
  mutation createNovelLike($novelID: String!) {
    createNovelLike(novelID: $novelID) {
      id
      createAt
    }
  }
`;

export const DELETE_NOVEL_INDEX = gql`
  mutation deleteNovelIndex($novelIndexID: String!) {
    deleteNovelIndex(novelIndexID: $novelIndexID) {
      id
      msg
      isSuccess
    }
  }
`;

export const CHANGE_PRIVATE_NOVEL_INDEX = gql`
  mutation changePrivateNovelIndex($novelIndexID: String!) {
    changePrivateNovelIndex(novelIndexID: $novelIndexID) {
      id
    }
  }
`;

export const FETCH_PAID_POINTS = gql`
  query fetchPaidPoints($page: Int!) {
    fetchPaidPoints(page: $page) {
      id
      point
      createAt
      # status {
      #   id
      #   description
      # }
    }
  }
`;
