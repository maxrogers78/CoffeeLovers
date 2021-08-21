import "../styles/styles.scss";
import type { AppProps } from "next/app";
import Layout from "../layout";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Coffee Lovers</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
