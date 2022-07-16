import { gql } from "@apollo/client";

export const FETCH_NOVEL_REVIEW_ALL = gql`
query fetchNovelReviewAll($novel: String!){
  fetchNovelReviewAll(novel: $novel) {
    
  }
}
`;
