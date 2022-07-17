import { gql } from "@apollo/client";

export const CREATE_PAYMENT = gql`
  mutation createPayment($createPaymentInput: CreatePaymentInput!) {
    createPayment(createPaymentInput: $createPaymentInput) {
      id
      impUid
      merchantUid
      amount
      createAt
      user {
        id
        name
        email
        phone
      }
      product {
        point
      }
    }
  }
`;

export const FETCH_PRODUCTS_ALL = gql`
  query fetchProductsAll {
    fetchProductsAll {
      id
      name
      description
      price
      point
    }
  }
`;

export const FETCH_LOGIN_USER = gql`
  query fetchLoginUser {
    fetchLoginUser {
      id
      nickName
      email
      point
    }
  }
`;
