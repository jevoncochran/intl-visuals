import { Box } from "@mui/material";
import styled from "@emotion/styled";
import useWindowSize from "../utils/useWindowSize";

const Selection = styled.div`
  font-family: Roboto Slab, serif;
  color: #00;
  margin: 0;
`;

const Language = () => {
  const windowSize = useWindowSize();
  const desktop = windowSize.width > 500;

  return (
    <Box
      mb={desktop ? 2 : 0}
      sx={{
        // border: "1px dashed black",
        display: "flex",
        justifyContent: desktop ? "flex-end" : "flex-start",
        paddingRight: desktop ? "200px" : 0,
        height: desktop ? "auto" : "100%",
      }}
    >
      {desktop && (
        <Box
          sx={{
            // border: "1px dashed black",
            width: "250px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Selection>english</Selection>
          <Selection>español</Selection>
          <Selection>português</Selection>
        </Box>
      )}
      {/* {!desktop && (
        <Box
          sx={{
            // border: "1px dashed black",
            width: "100px",
            // height: "100%",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "blue",
            alignItems: "center",
          }}
        >
          <Selection>en</Selection>
          <Selection>|</Selection>
          <Selection>es</Selection>
          <Selection>|</Selection>
          <Selection>pt</Selection>
        </Box>
      )} */}
    </Box>
  );
};

export default Language;
