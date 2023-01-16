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
      <meta
        name="image"
        property="og:image"
        content="https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2FRecession-Proof_Your_Resume.jpg&w=1200&q=75"
      />
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
