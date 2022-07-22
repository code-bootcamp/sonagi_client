import { gql } from "@apollo/client";

export const CREATE_QUESTION = gql`
  mutation createQuestion($createQuestionInput: CreateQuestionInput!) {
    createQuestion(createQuestionInput: $createQuestionInput) {
      id
      title
      contents
      createAt
      user {
        id
        name
      }
      answer {
        id
        title
        contents
      }
      status
    }
  }
`;
