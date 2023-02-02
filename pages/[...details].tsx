import MetaTags from "@/components/MetaTags/MetaTags";
import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const [imagePath, setImagePath] = useState(router.asPath);

  console.log(imagePath);
  //   console.log(router.asPath);
  //    x.substr(x.indexOf('/details/')+9)

  useEffect(() => {
    setImagePath(
      router.asPath.substring(router.asPath.indexOf("details/") + 8)
    );
  }, [router.asPath]);

  return (
    <>
      <MetaTags calledFrom="detailsPage" imagePath={imagePath} />
      <h1>Details</h1>
    </>
  );
};

export default Details;
