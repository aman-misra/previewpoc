import React from "react";
import DetailsPage from "./DetailsPage";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

const MetaTags = ({ calledFrom, imagePath }: any) => {
  return (
    <>
      {calledFrom == "homePage" ? <HomePage /> : ""}
      {calledFrom == "loginPage" ? <LoginPage /> : ""}
      {calledFrom == "detailsPage" ? <DetailsPage imagePath={imagePath} /> : ""}
    </>
  );
};

export default MetaTags;
