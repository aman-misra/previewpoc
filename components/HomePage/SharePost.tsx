import { Button } from "@mui/material";
import React from "react";

const SharePost = ({ session }: any) => {
  console.log(session, "session");

  const shareClicked = async () => {
    console.log("shared");

    let res = await fetch(`https://api.linkedin.com/v2/ugcPosts`, {
      method: "POST",
      headers: {
        "X-Restli-Protocol-Version": ": 2.0.0",
        Authorization: `Bearer ${session.accessToken}`,
      },
      body: JSON.stringify({
        author: "urn:li:person:tM_C8HyeBm",
        lifecycleState: "PUBLISHED",
        specificContent: {
          "com.linkedin.ugc.ShareContent": {
            shareCommentary: {
              text: "Hello World! This is my second Share on LinkedIn!",
            },
            shareMediaCategory: "NONE",
          },
        },
        visibility: {
          "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC",
        },
      }),
    });
    res = await res.json();
    console.log(res);
  };

  return (
    <Button
      sx={{ marginTop: "20px" }}
      variant="contained"
      onClick={shareClicked}
    >
      Share Post
    </Button>
  );
};

export default SharePost;
