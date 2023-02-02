import MetaTags from "@/components/MetaTags/MetaTags";
import React, { useEffect, useState } from "react";

const Details = ({ imagePath }: any) => {
  console.log(imagePath);

  return (
    <>
      <MetaTags calledFrom="detailsPage" imagePath={imagePath} />
      <h1>Details</h1>
    </>
  );
};

export default Details;

export async function getServerSideProps({ resolvedUrl }: any) {
  const imagePath = resolvedUrl.substring(resolvedUrl.indexOf("details/") + 8);

  return {
    props: {
      imagePath,
    },
  };
}
