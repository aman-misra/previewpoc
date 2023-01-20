import Layout from "@/components/Layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react"
import Head from "next/head";

export default function App({ Component,
  pageProps: { session, ...pageProps }, }: AppProps) {
  return (
    <>
      <Head>
        <title>Preview POC</title>
      </Head>
      <SessionProvider session={session}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SessionProvider>
    </>
  );
}
