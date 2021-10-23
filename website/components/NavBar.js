import { useState } from "react";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { SocialIcon } from "react-social-icons";
import useWindowSize from "../utils/useWindowSize";
import Link from "next/link";

const PhotoLink = styled.div`
  font-family: Roboto Slab, serif;
  font-weight: 700;
`;

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
        padding: desktop ? "12px 0" : 0,
        display: "flex",
        flexDirection: "column",
        alignItems: desktop ? "flex-start" : "center",
      }}
    >
      {desktop && (
        <Typography mb={3} sx={{ fontWeight: "bold" }}>
          International Visuals
        </Typography>
      )}
      <Box
        mb={3}
        sx={{
          //   border: "1px dashed black",
          height: "130px",
          display: desktop ? "flex" : mobileNavOpen ? "flex" : "none",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Link href="/">
          <PhotoLink>home</PhotoLink>
        </Link>
        <PhotoLink>places</PhotoLink>
        <PhotoLink>faces</PhotoLink>
        <PhotoLink>skies</PhotoLink>
        <PhotoLink>real estate</PhotoLink>
      </Box>
      <Box
        mb={2}
        sx={{
          display: desktop ? "flex" : mobileNavOpen ? "flex" : "none",
          flexDirection: "column",
        }}
      >
        <Link href="/about">
          <Typography>about</Typography>
        </Link>
        <Typography>contact</Typography>
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
