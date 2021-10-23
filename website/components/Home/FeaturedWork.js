import { Box } from "@mui/system";
import Image from "next/image";
import kiddos from "../../public/images/kiddos.jpg";
import larissaOnBeach from "../../public/images/larissa-on-beach.jpg";
import lexie from "../../public/images/lexie.jpg";
import lucasHeadshot from "../../public/images/lucas-headshot.jpg";
import peixeNipseyMural from "../../public/images/peixe-nipsey-mural.jpg";
import rebeccaPic from "../../public/images/rebecca-pic.jpg";
import sydneySmiling from "../../public/images/sydney-smiling.jpg";
import useWindowSize from "../../utils/useWindowSize";

const FeaturedWork = () => {
  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  return (
    <Box
      sx={{
        // border: "1px dashed black",
        // backgroundColor: "pink",
        // TODO: make sure having a percent value here doesn't create problems
        width: desktop ? "91%" : "auto",
        columnCount: desktop ? 3 : 0,
        columnGap: desktop ? 2 : 0,
        padding: desktop ? "0 200px" : "24px",
      }}
    >
      <Image
        src={kiddos}
        alt="International Visuals photography"
        style={{ marginBottom: "24px" }}
      />
      <Image src={lexie} alt="International Visuals photography" />
      <Image src={larissaOnBeach} alt="International Visuals photography" />
      <Image src={lucasHeadshot} alt="International Visuals photography" />
      <Image src={rebeccaPic} alt="International Visuals photography" />
      <Image src={peixeNipseyMural} alt="International Visuals photography" />
      <Image src={sydneySmiling} alt="International Visuals photography" />
    </Box>
  );
};

export default FeaturedWork;
