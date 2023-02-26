import React from "react";
import { Container, TextField, Typography, Box, Stack, Button } from "@mui/material";
import Img from "../Images/mail.png";
export default function contractus() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" fontFamily={"initial"} align="center" marginTop={'25px'}>
        Have some questions?
      </Typography>
      <Box display={{ md: "flex", xs: 'block' }} marginTop={"5%"}>
        <Box
          width={{ md: "50%", xs: '100%' }}
          display="flex"
          justifyContent={"center"}

        >
          <img src={Img} width={"60%"} />
        </Box>

        <Stack
          width={"50%"}
          spacing={2}
          justifyContent="center"
          alignItems={"self-start"}
        >
          <TextField
            variant="outlined"
            label="Firstname"
            sx={{ width: "60%" }}
          />
          <TextField variant="outlined" label="Lstname" sx={{ width: "60%" }} />
          <TextField
            variant="outlined"
            label="What's your mail"
            sx={{ width: "60%" }}
          />
          <TextField
            variant="outlined"
            multiline
            label="Your question..."
            sx={{ width: "60%" }}
            rows={3}
          />
          <Button variant="contained" sx={{ width: { md: '60%', sx: '100%' } }}>Send Message</Button>
        </Stack>
      </Box>
    </Container>
  );
}
