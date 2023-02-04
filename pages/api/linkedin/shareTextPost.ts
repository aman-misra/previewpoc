// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == "POST") {
    const response = await fetch(`https://api.linkedin.com/v2/ugcPosts`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${req.body.bearer_token}`,
        "X-Restli-Protocol-Version": "2.0.0",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify({
        author: `urn:li:person:${req.body.userId}`,
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

    let result = await response.json();

    console.log(result, "result");

    if (response.status != 201) {
      res.status(response.status).json({
        result,
      });
    } else {
      res.status(200).json({ name: "Yayyy!!!! successfull" });
    }
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
