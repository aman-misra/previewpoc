import React from "react";
import { LINKEDIN_URL } from "helpers/auth";

export default function LinkedInAuth() {
  return (
    <a href={LINKEDIN_URL}>
      <button type="submit" style={{ height: "40px", width: "215px" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src={
            "https://taggbox.com/blog/wp-content/uploads/2018/09/Signin-with-LinkedIn.png"
          }
          alt={"LinkedIn authentification"}
        />
      </button>
    </a>
  );
}
