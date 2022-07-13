import Head from "next/head";
import MainPageContainer from "../src/components/units/mainPage/MainPage.container";

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>소나기 &#58; 내 글이 작품이 되는 공간 </title>
        <meta property="og:title" content="소나기" />
        <meta
          property="og:description"
          content="웹소설 창작플랫폼, 소나기에 오신 것을 환영합니다."
        />
        <link rel="icon" href="/header/favicon.ico" />
      </Head>
      <MainPageContainer />
    </div>
  );
}
