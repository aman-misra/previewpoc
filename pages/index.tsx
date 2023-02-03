import Header from "@/components/common/Header/Header";
import LoginButton from "@/components/LoginPage/LoginButton";
import MetaTags from "@/components/MetaTags/MetaTags";
import SignIn from "@/components/Templates/SignIn";
import AirplayIcon from "@mui/icons-material/Airplay";
import { useSession, signIn, signOut } from "next-auth/react";
import { Box } from "@mui/material";
import SharePost from "@/components/HomePage/SharePost";
import { useEffect, useState } from "react";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <MetaTags calledFrom="homePage" />
        <Header />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Signed in as {session && session.user && session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
          <SharePost session={session} />
        </Box>
      </>
    );
  }
  return (
    <>
      <MetaTags calledFrom="homePage" />
      <Header />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        Not signed in <br />
        <LoginButton />
      </Box>
    </>
  );
}

// export async function getServerSideProps() {

//   const { data: session1 } = useSession()

//   return {
//     props: { session1 },
//   };
// }

// AQVM9iSJWVscdOoq2wiCy1suB8ssIprkwtrXDd4C1vXRFER0RhUOKSV-AEOOXH8LYsps-xEJhTHduCJgluq1w9WGTPKIs_C91TIdgWVTJmE8SXXORy2rzp1IhgMH4HSrVQywrztVaaoPICyHOUJJJmtyUsXLbce1MOsJWwEkhHydPMlQzEaFYIuFQh9jpJgi6j9MHSDsFgv23C8OfW2t3e1pXBG8AfEqYBhb6RNaiPx1X3r6kkoC8MDemKTDqriDvWucYMmcvvDwi_oa26BXK7PMICWi9eTnaf8boHbpDMTfn4K7IB-35gHCylFgwMMDKLaHH_RJBmuAXhKZcmCJUITu8t2bKg

// tM_C8HyeBm

// {
//   "value": {
//     "mediaArtifact": "urn:li:digitalmediaMediaArtifact:(urn:li:digitalmediaAsset:C4D22AQFe1pYNVk577g,urn:li:digitalmediaMediaArtifactClass:feedshare-uploadedImage)",
//     "uploadMechanism": {
//       "com.linkedin.digitalmedia.uploading.MediaUploadHttpRequest": {
//         "uploadUrl": "https://api.linkedin.com/mediaUpload/C4D22AQFe1pYNVk577g/feedshare-uploadedImage/0?ca=vector_feedshare&cn=uploads&m=AQI9vcmFrxsL4wAAAYYRVuqmgwbPRqKlvsUZOd8WV0Ou8UVEJp65MKu5-bY&app=208114456&sync=0&v=beta&ut=23HTxfcNrn3GE1",
//         "headers": {
//           "media-type-family": "STILLIMAGE"
//         }
//       }
//     },
//     "asset": "urn:li:digitalmediaAsset:C4D22AQFe1pYNVk577g",
//     "assetRealTimeTopic": "urn:li-realtime:digitalmediaAssetUpdatesTopic:urn:li:digitalmediaAsset:C4D22AQFe1pYNVk577g"
//   }
// }

// curl -i --upload-file /home/sysadmin/Om/Personal/previewpoc/public/images/image-one.jpg --header "Authorization: Bearer AQVM9iSJWVscdOoq2wiCy1suB8ssIprkwtrXDd4C1vXRFER0RhUOKSV-AEOOXH8LYsps-xEJhTHduCJgluq1w9WGTPKIs_C91TIdgWVTJmE8SXXORy2rzp1IhgMH4HSrVQywrztVaaoPICyHOUJJJmtyUsXLbce1MOsJWwEkhHydPMlQzEaFYIuFQh9jpJgi6j9MHSDsFgv23C8OfW2t3e1pXBG8AfEqYBhb6RNaiPx1X3r6kkoC8MDemKTDqriDvWucYMmcvvDwi_oa26BXK7PMICWi9eTnaf8boHbpDMTfn4K7IB-35gHCylFgwMMDKLaHH_RJBmuAXhKZcmCJUITu8t2bKg" 'https://api.linkedin.com/mediaUpload/C4D22AQFe1pYNVk577g/feedshare-uploadedImage/0?ca=vector_feedshare&cn=uploads&m=AQI9vcmFrxsL4wAAAYYRVuqmgwbPRqKlvsUZOd8WV0Ou8UVEJp65MKu5-bY&app=208114456&sync=0&v=beta&ut=23HTxfcNrn3GE1'
