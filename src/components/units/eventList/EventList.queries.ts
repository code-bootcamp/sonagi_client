import { gql } from "@apollo/client";

export const FETCH_EVENTS = gql`
  query fetchEventsAll {
    fetchEventsAll {
      id
      title
      contents
      files {
        id
        url
      }
    }
  }
`;
