import { useRouter } from "next/router";
import React, { useState } from "react";

const Linkedin = () => {
  const [signinUrl, setSigninUrl] = useState("");
  const [accessUrl, setAccessUrl] = useState("");
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
    res = await res.json();
    console.log(res, "res");
    if (res.newUrl) {
      setAccessUrl(res.newUrl);
    }
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
      {accessUrl && <a href={accessUrl}>Open Access Popup</a>}
    </div>
  );
};

export default Linkedin;
