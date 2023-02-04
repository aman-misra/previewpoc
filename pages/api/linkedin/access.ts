// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  //   console.log(req.body.code);
  const code = req.body.code;
  //   console.log(code, "code");
  // console.log(process.env.ACCESS_TOKEN);

  //   https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=${process.env.LINKEDIN_CLIENT_ID}&client_secret=${process.env.LINKEDIN_CLIENT_SECRET}&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Flinkedin

  if (req.method == "POST") {
    // const formData = new URLSearchParams();
    // formData.append("code", code);
    // formData.append("grant_type", "authorization_code");
    // formData.append("client_id", process.env.LINKEDIN_CLIENT_ID!);
    // formData.append("client_secret", process.env.LINKEDIN_CLIENT_SECRET!);
    // formData.append("redirect_uri", "http%3A%2F%2Flocalhost%3A3000%2Flinkedin");

    // const body = {
    //   code: code,
    //   grant_type: "authorization_code",
    //   client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    //   client_id: process.env.LINKEDIN_CLIENT_ID,
    //   redirect_uri: "http%3A%2F%2Flocalhost%3A3000%2Flinkedin",
    // };

    // const formBody = Object.keys(body)
    //   .map(
    //     (key) => encodeURIComponent(key) + "=" + encodeURIComponent(body[key])
    //   )
    //   .join("&");
    // console.log(formBody);

    const response = await fetch(
      `https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=${process.env.LINKEDIN_CLIENT_ID}&client_secret=${process.env.LINKEDIN_CLIENT_SECRET}&redirect_uri=http://localhost:3000/linkedin`
      // {
      //   method: "GET",
      // headers: {
      //   "Content-Type": "x-www-form-urlencoded",
      // },
      // }
    );
    let result = await response.json();
    console.log(result);
    let { access_token, expires_in } = result;
    console.log(access_token);
    console.log(expires_in);

    res.status(response.status).json({
      result,
    });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
