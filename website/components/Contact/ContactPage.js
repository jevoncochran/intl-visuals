import React, { useState, useEffect } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import styled from "@emotion/styled";
import { sendInquiry } from "../../utils/sendInquiry";
import Map from "./Map";

const SmallInput = styled(TextField)(() => ({
  width: "300px",
  marginBottom: "12px",
}));

const LargeInput = styled(TextField)(() => ({
  width: "100%",
  marginBottom: "12px",
}));

const InputLabel = styled(Typography)(() => ({
  marginBottom: "6px",
}));

const ContactPage = () => {
  const [inquiry, setInquiry] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    source: "",
  });

  const handleChanges = (e) => {
    setInquiry({ ...inquiry, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
        // border: "1px dashed black",
        padding: "0 200px",
        display: "flex",
        width: "91%",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            // border: "1px dashed black",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          mb={3}
        >
          <Typography>LET'S CONNECT</Typography>
          <Typography>
            Submit a message below and I will get back to you in 24 hours or
            less.
          </Typography>
          <Typography>International Visuals</Typography>
          <Typography>+1 (510) 424-8976</Typography>
          <Typography>info@intlvisuals.com</Typography>
          <Typography>Based in Detroit, MI</Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          // sx={{ border: "1px dashed black" }}
        >
          <form
            onSubmit={sendInquiry}
            style={{ width: "50%", display: "flex", flexDirection: "column" }}
          >
            {/* <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}> */}
            <InputLabel>Name*</InputLabel>
            <SmallInput
              id="outlined-basic"
              variant="outlined"
              name="name"
              onChange={handleChanges}
            />

            <InputLabel>Email*</InputLabel>
            <SmallInput
              id="outlined-basic"
              variant="outlined"
              name="email"
              onChange={handleChanges}
            />
            <InputLabel>Phone</InputLabel>
            <SmallInput
              id="outlined-basic"
              variant="outlined"
              name="phone"
              onChange={handleChanges}
            />

            <InputLabel>How did you hear about us?</InputLabel>
            <SmallInput
              id="outlined-basic"
              variant="outlined"
              name="source"
              onChange={handleChanges}
            />
            <InputLabel>Message*</InputLabel>
            <LargeInput
              id="outlined-basic"
              variant="outlined"
              multiline
              rows={7}
              name="message"
              onChange={handleChanges}
            />
            <Button variant="contained" type="submit" sx={{ width: "120px" }}>
              Submit
            </Button>
            {/* </Box> */}
          </form>
          <Box display="flex" alignItems="center">
            <Map />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactPage;
