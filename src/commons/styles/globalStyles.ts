import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: Noto Sans CJK KR, -apple-system, BlinkMacSystemFont, SUIT,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Helvetica Neue, sans-serif;
    display: flex;
    flex-direction: column;
    color: #484848;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;
