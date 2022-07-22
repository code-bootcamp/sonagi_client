import { gql } from "@apollo/client";

export const FETCH_QUESTION = gql`
  query fetchQuestion($questionID: String!) {
    fetchQuestion(questionID: $questionID) {
      id
      title
      contents
      answer {
        id
        title
        contents
      }
      status
    }
  }
`;
