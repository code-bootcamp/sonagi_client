import { gql } from "@apollo/client";

export const CREATE_EVENT = gql`
  mutation createEvent($createEventInput: CreateEventInput!) {
    createEvent(createEventInput: $createEventInput) {
      id
      title
      contents
      isEvent
      files {
        id
        url
      }
    }
  }
`;
