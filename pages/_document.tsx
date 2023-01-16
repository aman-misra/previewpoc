import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <title>Preview POC</title>
        <meta
          name="description"
          content="This is POC to check the image and description in the preview when the link is pasted in the social media chats/posts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav_icon.png" />
        <meta property="og:title" content="Preview POC title" />
        <meta property="og:type" content="Next js website deployed on vercel" />
        <meta
          property="og:image"
          content="https://learning.shine.com/_next/image?url=https%3A%2F%2Fstatic1.shine.com%2Fl%2Fm%2Fimages%2Fblog%2FRecession-Proof_Your_Resume.jpg&w=1200&q=75"
        />
        <meta property="og:url" content="https://previewpoc.vercel.app/" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
