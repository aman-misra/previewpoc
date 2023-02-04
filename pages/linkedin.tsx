import { useRouter } from "next/router";
import React, { useState } from "react";

const Linkedin = () => {
  const [signinUrl, setSigninUrl] = useState("");
  const [sharePost, setSharePost] = useState(false);

  const [accessToken, setAccessToken] = useState("");
  const [userId, setUserId] = useState();

  const route = useRouter();
  console.log(route.query);
  const clicked = async () => {
    console.log("clicked");
    let res = await fetch("/api/linkedin/signin", {
      method: "GET",
    });
    res = await res.json();
    console.log(res, "res");
    if (res.url) {
      setSigninUrl(res.url);
    }
  };

  const signInUrl = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${process.env.LINKEDIN_CLIENT_ID}&redirect_uri=http://localhost:3000/linkedin&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`;

  const getAccessClicked = async () => {
    console.log("getAccessClicked");
    let res = await fetch("/api/linkedin/access", {
      method: "POST",
      body: JSON.stringify({
        code: route.query.code,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await res.json();
    console.log(result, "result");
    console.log(result.accessToken, "access_token");
    if (result.accessToken) {
      setSharePost(true);
      setAccessToken(result.accessToken);
      setUserId(result.userId);
    }
  };

  const sharePostClicked = async () => {
    console.log("sharePostClicked");
    let res = await fetch("/api/linkedin/shareTextPost", {
      method: "POST",
      body: JSON.stringify({
        bearer_token: accessToken,
        userId: userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "column",
        height: "50vh",
      }}
    >
      <a
        href={signInUrl}
        style={{ cursor: "pointer", border: "1px solid red" }}
      >
        Sign in with Linkedin
      </a>
      {signinUrl && <a href={signinUrl}> Open Popup</a>}
      {route.query.code && (
        <button onClick={getAccessClicked}>Get Access Token</button>
      )}
      {sharePost && (
        <button onClick={sharePostClicked}>Share Post on Linkedin</button>
      )}
    </div>
  );
};

export default Linkedin;
