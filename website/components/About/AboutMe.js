import aboutPic from "../../public/images/about-pic.jpg";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

const BioP = styled.p`
  font-size: 18px;
`;

const AboutMe = () => {
  return (
    <Box
      sx={{
        padding: "0 200px",
        display: "flex",
        // backgroundColor: "pink",
        width: "91%",
      }}
    >
      <Box sx={{ height: "600px", width: "337.6px" }} mr={4}>
        <Image
          src={aboutPic}
          alt="Jevon Cochran, International Visuals"
          // height={600}
          // width={337.6}
          // sx={{ marginRight: "16px" }}
        />
      </Box>
      <Box sx={{ width: "50%" }}>
        <Typography sx={{ fontSize: "20px" }}>About</Typography>
        <BioP>
          I am Jevon Cochran: a photographer, videographer, and multimedia
          visual artist born and based in Detroit, MI.{" "}
        </BioP>
        <BioP>
          An avid traveler, I discovered my passion for photography and visual
          arts in 2016 during one of many stints living abroad. Feeling called
          to document my time in Salvador da Bahia, Brazil, I began to create a
          record of my experiences equipped only with my iPhone. The
          overwhelmingly positive response I received for my travel content
          prompted me to take it to the next level and invest in a DSLR camera.
          From that moment, I never looked back and have been committed to
          perfecting my craft ever since.
        </BioP>
        <BioP>
          My brand, International Visuals, is an ode to my artistic origin
          story, as well as my knack for profiling and highlighting spaces.
          Whether they be places that exist in my own community or the many
          communities I have had the privilege of visiting and exploring, I am
          driven by the ability to open a window into another world. This art
          form, and the opportunities it presents to meet new people and forge
          new experiences, keeps me in motion. If you wish to connect, collab,
          or book me, you are welcome to hit me up.{" "}
        </BioP>
      </Box>
    </Box>
  );
};

export default AboutMe;
