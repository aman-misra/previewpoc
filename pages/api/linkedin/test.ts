// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // console.log(req.body);
  console.log(process.env.ACCESS_TOKEN);

  if (req.method == "POST") {
    const response = await fetch(`https://api.linkedin.com/v2/ugcPosts`, {
      method: "POST",
      headers: {
        "X-Restli-Protocol-Version": ": 2.0.0",
        // Authorization: `Bearer ${req.body.bearer_token}`,
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
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
    // console.log(response);
    // console.log(response.headers);

    if (response.status != 201) {
      res
        .status(response.status)
        .json({ state: response.status, statusText: response.statusText });
    } else {
      res.status(200).json({ name: "Yayyy!!!! successfull" });
    }
    // apiCall
    //   .then((data) => {
    //     console.log(data, "data then");
    //     res.status(200).json({
    //       name: `You submitted the following data: ${req.body} with response ${data}`,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err, "err catch");
    //     console.log(err, "err catch");
    //     res.status(200).json({
    //       name: `You got the error : ${err}`,
    //     });
    //   });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
