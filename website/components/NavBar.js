import { useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { SocialIcon } from "react-social-icons";
import useWindowSize from "../utils/useWindowSize";
import Link from "next/link";
import intlVisualsLogo from "../public/images/nav/intl_visuals_logo.png";
import Image from "next/image";

const PhotoLink = styled(Typography)(() => ({
  fontFamily: "Roboto Slab, serif",
  fontWeight: 700,
  cursor: "pointer",
}));

const PageLink = styled(Typography)(() => ({ cursor: "pointer" }));

const NavBar = () => {
  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <Box
      sx={{
        // border: "1px dashed black",
        // TODO: make sure having a percent value here doesn't create problems
        width: desktop ? "9%" : "100%",
        // padding: desktop ? "12px 0" : 0,
        display: "flex",
        flexDirection: "column",
        alignItems: desktop ? "flex-start" : "center",
      }}
    >
      {desktop && (
        <Link href="/" passHref>
          <Box
            mb={3}
            sx={{
              // border: "1px dashed red",
              position: "relative",
              height: "100px",
              width: "70%",
              cursor: "pointer",
            }}
          >
            <Image
              src={intlVisualsLogo}
              layout="responsive"
              alt="International Visuals logo"
            />
          </Box>
        </Link>
      )}
      <Box
        mb={3}
        sx={{
          // border: "1px dashed black",
          height: "130px",
          display: desktop ? "flex" : mobileNavOpen ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Link href="/" passHref>
          <PhotoLink>home</PhotoLink>
        </Link>
        <PhotoLink>places</PhotoLink>
        <PhotoLink>faces</PhotoLink>
        <PhotoLink>skies</PhotoLink>
        <PhotoLink>real estate</PhotoLink>
      </Box>
      <Box
        mb={3}
        sx={{
          display: desktop ? "flex" : mobileNavOpen ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        <Link href="/about" passHref>
          <PageLink>about</PageLink>
        </Link>
        <Link href="/contact" passHref>
          <PageLink>contact</PageLink>
        </Link>
      </Box>
      {desktop && (
        <Box
          sx={{
            //   border: "1px dashed black",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <SocialIcon
            url="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
          <SocialIcon
            url="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            fgColor="#fff"
            style={{ height: 30, width: 30 }}
          />
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
