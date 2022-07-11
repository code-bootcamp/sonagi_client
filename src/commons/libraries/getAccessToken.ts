// onError 함수 분리
import { gql } from "@apollo/client";
import { GraphQLClient } from "graphql-request";

// restoreAccessToken graphQl 발급받기
const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreToken {
    restoreToken
  }
`;

export async function getAccessToken() {
  try {
    // 1. GraphQlClient import
    const graphQlClient = new GraphQLClient(
      "https://041e-61-43-54-3.jp.ngrok.io/graphql",
      { credentials: "include" }
    );
    // 2. RESTORE_ACCESS_TOKEN gql을 요청한 뒤 반환되는 결과값을 result에 담기
    const result = await graphQlClient.request(RESTORE_ACCESS_TOKEN);
    // 3. 재발급 받은 accessToken 을 newAccessToken에 저장하기
    const newAccessToken = result.restoreToken;
    return newAccessToken;
  } catch (error) {
    console.log(error.message);
    // refreshToken까지 만료된 상황이기 때문에 로그인 페이지로 이동시켜 줘야 함
  }
}
