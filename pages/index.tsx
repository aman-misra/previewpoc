import MetaTags from "@/components/MetaTags/MetaTags";
import SignIn from "@/components/Templates/SignIn";
import AirplayIcon from "@mui/icons-material/Airplay";

export default function Home() {
  return (
    <>
      <MetaTags calledFrom="homePage" />
      <SignIn />
      <AirplayIcon />
    </>
  );
}
