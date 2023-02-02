import Head from "next/head";
import React from "react";

const HomePage = () => {
  return (
    <Head>
      <title>Home - Preview POC</title>
      <meta
        name="description"
        content="This is POC to check the image and description in the preview when the link is pasted in the social media chats/posts of home page."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/fav_icon.png" />
      <link rel="canonical" href="https://previewpoc.vercel.app/" />
      <meta name="title" property="og:title" content="Preview POC title" />
      <meta
        property="og:description"
        content="POC preview description home page"
      />
      <meta property="og:type" content="website" />
      <meta name="image" property="og:image" content="/images/image-two.jpg" />
      <meta property="og:url" content="https://previewpoc.vercel.app/" />
      <meta name="author" content="Aman Misra"></meta>
      <meta
        name="publish_date"
        property="og:publish_date"
        content="2023-01-16T00:00:00-0600"
      ></meta>
    </Head>
  );
};

export default HomePage;
