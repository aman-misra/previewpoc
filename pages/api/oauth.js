import { getURLWithQueryParams } from "../../helpers/auth";
// import Spinner from "components/Spinner";

const Oauth = async (req, res) => {
  const LINKEDIN_URL = getURLWithQueryParams(
    "https://www.linkedin.com/oauth/v2/accessToken",
    {
      grant_type: "authorization_code",
      code: req.query.code,
      redirect_uri: process.env.LINKEDIN_REDIRECT,
      client_id: process.env.LINKEDIN_CLIENT_ID,
      client_secret: process.env.LINKEDIN_CLIENT_SECRET,
    }
  );
  let tok;
  let resp = await fetch(LINKEDIN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  });
  console.log(resp, "resp");
  if (resp.ok) tok = await resp.json();
  let { access_token, expires_in } = tok;
  console.log(tok, "tok");

  let auth = "Bearer " + access_token;
  let u = {};
  let usr = await fetch("https://api.linkedin.com/v2/me", {
    method: "GET",
    headers: { Connection: "Keep-Alive", Authorization: auth },
  });
  if (usr.ok) u = await usr.json();

  console.log(u);

  if (u.localizedFirstName) {
    res.redirect("/user");
  }

  //   return <Spinner />;
};

export default Oauth;
