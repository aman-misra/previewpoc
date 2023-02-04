// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const code = req.body.code;

  if (req.method == "POST") {
    let result;
    const response = await fetch(
      `https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=${process.env.LINKEDIN_CLIENT_ID}&client_secret=${process.env.LINKEDIN_CLIENT_SECRET}&redirect_uri=http://localhost:3000/linkedin`
    );
    if (response.ok) result = await response.json();
    let { access_token, expires_in } = result;
    // console.log(result, "result");

    let auth = "Bearer " + access_token;
    let u;
    let usr = await fetch("https://api.linkedin.com/v2/me", {
      method: "GET",
      headers: { Connection: "Keep-Alive", Authorization: auth },
    });
    if (usr.ok) u = await usr.json();
    let { id } = u;
    // console.log(u);

    res.status(response.status).json({
      accessToken: access_token,
      userId: u.id,
    });
  } else {
    res.status(200).json({ name: "John Doe" });
  }
}
