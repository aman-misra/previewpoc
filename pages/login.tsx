import LoginButton from "@/components/LoginPage/LoginButton";
import Profile from "@/components/LoginPage/Profile";
import MetaTags from "@/components/MetaTags/MetaTags";
import { Box } from "@mui/material";
import React from "react";

const login = () => {
  return (
    <>
      <MetaTags calledFrom="loginPage" />
      {/* <SignIn /> */}
      <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
      <Profile />
      </Box>
    </>
  );
};

export default login;
