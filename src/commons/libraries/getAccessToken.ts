// onError 함수 분리
import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreToken {
    restoreToken
  }
`;

export async function getAccessToken() {
  try {
    const graphQlClient = new GraphQLClient(
      "https://miny-shrimp.shop/graphql",
      { credentials: "include" }
    );
    const result = await graphQlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreToken;
    sessionStorage.setItem("socialToken", result.restoreToken);
    return newAccessToken;
  } catch (error: any) {
    // console.log(error.message);
  }
}
