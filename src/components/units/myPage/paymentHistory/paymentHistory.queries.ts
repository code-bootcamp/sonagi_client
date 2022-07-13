import { gql } from "@apollo/client";

export const FETCH_PAYMENTS = gql`
  query fetchPaymentsInUser {
    fetchPaymentsInUser {
      id
      impUid
      merchantUid
      amount
      createAt
      product {
        point
      }
      # user {
      #   point
      # }
    }
  }
`;
