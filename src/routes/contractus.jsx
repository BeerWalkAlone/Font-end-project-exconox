import React from "react";
import { Container, TextField, Typography, Box, Stack, Button } from "@mui/material";
import Img from "../Images/mail.png";
export default function contractus() {
  return (
    <Box sx={{
      background:'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);',
      height: "100vh"
    }}>
     
    
    <Container maxWidth="lg">
      <Typography variant="h4" fontFamily={"initial"} align="center" marginTop={'0px'}>
        Have some questions?
      </Typography>
      <Box display={{ md: "flex", xs: 'block' }} marginTop={"15%"}>
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
    </Box>
  );
}
