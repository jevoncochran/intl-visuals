import { useContext } from "react";
import { SiteContext } from "../context/siteContext";
import Head from "next/head";
import NavBar from "./NavBar";
import Language from "./Language";
import { Box } from "@mui/material";
import MobileHeader from "./MobileHeader";
import useWindowSize from "../utils/useWindowSize";

const Layout = (props) => {
  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  const { mobileNavActive, activateMobileNav, deactivateMobileNav } =
    useContext(SiteContext);

  return (
    <div>
      <Head>
        <title>International Visuals</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {!desktop && <MobileHeader />}
      <Box sx={{ padding: desktop ? "24px" : 0 }}>
        {desktop && <Language />}
        <Box sx={{ display: desktop ? "flex" : "block" }}>
          <NavBar />
          {props.children}
        </Box>
      </Box>
    </div>
  );
};

export default Layout;
