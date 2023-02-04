import { useRouter } from "next/router";
import React, { useState } from "react";

const Linkedin = () => {
  const [signinUrl, setSigninUrl] = useState("");
  const [sharePost, setSharePost] = useState(false);

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
    if (result.access_token) {
      setSharePost(true);
    }
  };

  const sharePostClicked = () => {
    
  };

  return (
    <div>
      Hello
      <button onClick={clicked}>Sign in with Linkedin</button>
      {signinUrl && <a href={signinUrl}> Open Popup</a>}
      <hr />
      {route.query.code && (
        <button onClick={getAccessClicked}>Get Access Token</button>
      )}
      <hr />
      <hr />
      {sharePost && (
        <button onClick={sharePostClicked}>Share Post on Linkedin</button>
      )}
    </div>
  );
};

export default Linkedin;
