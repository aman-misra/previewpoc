// https://www.linkedin.com/oauth/v2/authorization

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == "GET") {
    const response = await fetch(
      `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=${process.env.LINKEDIN_REDIRECT}&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`
    );
    // console.log(response);
    // console.log(response.headers);

    res.status(response.status).json({
      state: response.status,
      statusText: response.statusText,
      headers: response.headers,
      url: response.url,
    });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
