import MetaTags from "@/components/MetaTags/MetaTags";
import SignIn from "@/components/Templates/SignIn";
import React from "react";

const login = () => {
  return (
    <>
      <MetaTags calledFrom="login" />
      <SignIn />
    </>
  );
};

export default login;
