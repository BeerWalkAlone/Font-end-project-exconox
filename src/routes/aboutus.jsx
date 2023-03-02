import React from "react";
import { Container, Box } from "@mui/material";
import Images from "../Images/image2.webp"
export default function aboutus() {
  return (
    <Box sx={{
      background: 'rgb(124, 185, 232)',
      background: '-webkit-linear-gradient(to right, #085078, #85d8ce)',
      background: 'linear-gradient(to right, #085078, #85d8ce)',
      height: "100vh"
    }}>
      <Container maxWidth='xl' sx={{ display: { md: 'flex', xs: 'block' }, alignItems: 'center', height: '100vh' }}>
        <Box width={{ md: '50%', xs: '100%' }}>
          <h1 style={{ marginTop: 0, fontSize: 50 }}>About Us</h1>
          <p style={{ fontSize: 20, fontFamily: 'inherit' }}>
            t is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </p>
        </Box>
        <Box width={{ md: '50%', xs: '100%' }}>
          <img src={Images} alt="" width={'100%'} />
        </Box>
      </Container>
    </Box>
  );
}
