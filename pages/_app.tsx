import Layout from "@/components/Layout/Layout";
import "styles/globals.css";
import type { AppProps } from "next/app";
// import { SessionProvider } from "next-auth/react";
import Head from "next/head";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  const theme = createTheme({
    components: {
      // Name of the component ⚛️
      MuiCssBaseline: {
        styleOverrides: {
          "*, *::before, *::after": {
            transition: "none !important",
            animation: "none !important",
          },
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Preview POC</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* <SessionProvider session={session}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </SessionProvider> */}
      </ThemeProvider>
    </>
  );
}
