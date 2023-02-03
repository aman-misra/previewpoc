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
      `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flinkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`
    );
    console.log(response);
    // console.log(response.headers);

    res.status(response.status).json({
      state: response.status,
      statusText: response.statusText,
      headers: response.headers,
      url: response.url,
    });

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
