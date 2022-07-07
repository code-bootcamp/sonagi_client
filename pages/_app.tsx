import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
