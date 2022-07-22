import { gql } from "@apollo/client";

export const FETCH_QUESTION = gql`
  query fetchQuestionAll {
    fetchQuestionAll {
      id
      title
      contents
      createAt
      answer {
        id
        title
        contents
      }
      status
    }
  }
`;
