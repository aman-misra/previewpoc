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
  // console.log(session, 'session');

  const [accessToken, setAccessToken] = useState<any>();
  // console.log(accessToken, 'accessToken');
  // console.log(session?.accessToken, 'session accessToken');

  // useEffect(() => {
  //   if (session?.accessToken) {
  //     setAccessToken(session?.accessToken)
  //   }
  //   const fetchUserInfo = async () => {
  //     let res = await fetch(`https://api.linkedin.com/v2/userinfo`, {
  //       method: "GET",
  //       headers: { Authentication: `Bearer {${session?.accessToken}}` }
  //     });
  //     res = await res.json();
  //     console.log(res, 'res user');
  //   }
  //   if (session?.accessToken) {
  //     fetchUserInfo()
  //     console.log('inside');

  //   }

  // }, [session?.accessToken])

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
