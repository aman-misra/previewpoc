import React from "react";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const MetaTags = ({ calledFrom }: any) => {

  return (
    <>
      {calledFrom == "homePage" ? <HomePage /> : ""}
      {calledFrom == "loginPage" ? <LoginPage /> : ""}
    </>
  );
};

export default MetaTags;
