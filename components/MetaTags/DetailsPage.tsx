import Head from "next/head";
import React from "react";

const DetailsPage = ({ imagePath }: any) => {
  const imageUrl = imagePath;

  return (
    <Head>
      <title>DetailsPage - Preview POC</title>
      <meta
        name="description"
        content="This is POC to check the image and description in the preview when the link is pasted in the social media chats/posts of details page."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/fav_icon.png" />
      <link rel="canonical" href="https://previewpoc.vercel.app/details" />
      <meta
        name="title"
        property="og:title"
        content="Preview POC title login"
      />
      <meta
        property="og:description"
        content="POC preview description login page"
      />
      <meta property="og:type" content="website" />
      <meta
        name="image"
        property="og:image"
        content={`/images/${imagePath}.jpg`}
      />
      <meta property="og:url" content="https://previewpoc.vercel.app/details" />
      <meta name="author" content="Aman Misra"></meta>
      <meta
        name="published_time"
        property="article:published_time"
        content="2023-01-16T00:00:00-0600"
      ></meta>
      <meta
        name="modified_time"
        property="article:modified_time"
        content="2023-01-16T10:00:00-0600"
      ></meta>
    </Head>
  );
};

export default DetailsPage;
