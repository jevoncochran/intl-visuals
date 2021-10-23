import { useContext } from "react";
import { SiteContext } from "../context/siteContext";
import { Box, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SocialIcon } from "react-social-icons";

const MobileHeader = () => {
  const { mobileNavActive, activateMobileNav, deactivateMobileNav } =
    useContext(SiteContext);

  return (
    <Box
      height="100px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: "0 24px" }}
    >
      <Typography
        sx={{ fontWeight: "bold", width: "100px", textAlign: "center" }}
      >
        International Visuals
      </Typography>
      <Box
        sx={{
          //   border: "1px dashed black",
          width: "200px",
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
      <IconButton
        onClick={mobileNavActive ? deactivateMobileNav : activateMobileNav}
      >
        <MenuIcon sx={{ height: "50px", width: "50px" }} />
      </IconButton>
    </Box>
  );
};

export default MobileHeader;
