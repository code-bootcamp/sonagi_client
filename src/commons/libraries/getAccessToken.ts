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
      "https://b451-112-152-231-30.jp.ngrok.io/graphql",
      { credentials: "include" }
    );
    const result = await graphQlClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreToken;
    return newAccessToken;
  } catch (error: any) {
    console.log(error.message);
  }
}
