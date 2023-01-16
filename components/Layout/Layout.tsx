import Head from "next/head";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Layout = (props: any) => {
  return (
    <>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
