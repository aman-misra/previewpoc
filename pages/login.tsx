import MetaTags from "@/components/MetaTags/MetaTags";
import SignIn from "@/components/Templates/SignIn";
import React from "react";

const login = () => {
  return (
    <div>
      <MetaTags calledFrom="login" />
      <SignIn />
    </div>
  );
};

export default login;
