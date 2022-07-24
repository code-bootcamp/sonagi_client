import { gql } from "@apollo/client";

// 포인트 충전 내역
export const FETCH_PAYMENTS = gql`
  query fetchPaymentsInUser($page: Int!) {
    fetchPaymentsInUser(page: $page) {
      payments {
        id
        impUid
        merchantUid
        amount
        createAt
        user {
          id
          name
          nickName
        }
        product {
          point
          id
          name
          price
          point
        }
      }
      count
    }
  }
`;

// 회차 결제목록
export const FETCH_PAID_POINTS = gql`
  query fetchPaidPoints($page: Int!) {
    fetchPaidPoints(page: $page) {
      id
      point
      createAt
      status {
        id
        description
      }
      user {
        id
        name
        nickName
      }
      novelIndex {
        id
        title
        contents
        user {
          id
          nickName
          userClass {
            id
          }
        }
      }
    }
  }
`;

// 후원 결제 목록
export const FETCH_DONATE_POINTS = gql`
  query fetchDonatePoints($page: Int!) {
    fetchDonatePoints(page: $page) {
      id
      point
      createAt
      novel {
        id
        title
        user {
          id
          nickName
          userClass {
            id
          }
        }
        files {
          id
          name
          path
          url
        }
      }
      user {
        id
        name
        nickName
      }
    }
  }
`;
