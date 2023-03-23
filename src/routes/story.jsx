import React from 'react'
import { Container, TextField, Typography, Box, Stack, Button, Divider } from "@mui/material"
import Img from '../Images/Econox.jpg'
import Img2 from '../Images/700464-3.jpg'
import Img3 from '../Images/410tQjnN7XL.jpg'
import { fontSize } from '@mui/system'
export default function story() {
  return (
    <Box sx={{
      background: 'rgb(124, 185, 232)',
      background: '-webkit-linear-gradient(to right, #D6A4A4, #DAE2F8)',
      background: 'linear-gradient(to right, #D6A4A4, #DAE2F8)',
      height: "100%"
    }}>
      <Container maxWidth='lg' sx={{ flexDirection: { md: 'row', xs: 'column' }, alignItems: 'center', paddingTop: 5 }} >
        <Typography flex={1} variant="h5" fontFamily={"revert-layer"} align="center" marginTop={'0px'}>
          <h1 style={{ fontSize: 38 }}>We create dreams for the future. <br />We realize them sucessfully.</h1>
          <p style={{ fontSize: 20, fontFamily: "unset" }}>Check out our new font generator and level up your social bios. Need more? Head over to Glyphy
            for all the fancy fonts and cool symbols you could ever imagine.And don’t forget, we have images,
            plugins and the ultimate guide to all flavors of lorem ipsum.
            <br />“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”</p>
        </Typography>
        <hr />

        <Box display={{ md: "flex", xs: 'block' }}>
          <Box display={"flex"} flex={1} alignItems={{ md: 'flex-end', xs: 'center' }} flexDirection='column' paddingRight={{ md: 5, xs: 0 }}>
            <h1 style={{ fontSize: 48, color: 'blue' }}>2023</h1>
            <img src={Img} width={"100%"} />
          </Box>

          <Divider flexItem orientation='vertical' />
          <Box display={{ md: "flex", xs: 'block' }} flex={1} paddingTop={10} >

            <Stack width={"100%"} alignItems={"self-start"} paddingLeft={5}>
              <h1>The standard Lorem Ipsum passage</h1>
              <p style={{ fontFamily: "revert", fontSize: 20 }}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </Stack>

          </Box>
        </Box>
        <hr />

        <Box display={{ md: "flex", xs: 'block', marginTop: '120px' }}>
          <Box width={"70%"} >
            <h1>1914 translation by H. Rackham</h1>
            <p style={{ fontFamily: "revert", fontSize: 20 }}>
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete
              account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
              No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to
              pursue pleasure rationally encounter consequences that are extremely painful.</p>
          </Box>
          <Stack display={{ md: "flex", xs: 'block' }} paddingLeft={5}>
            <Box width={{ md: "100%", xs: '100%' }} display="flex" justifyContent={"center"}>
              <img src={Img2} width={"100%"} />
            </Box>
          </Stack>
        </Box>
        <hr />

        <Box display={{ md: "flex", xs: 'block', marginTop: '120px' }}>
          <Box width={{ md: "100%", xs: '100%' }} display="flex" justifyContent={"center"}>
            <img src={Img3} width={"40%"} />
          </Box>
          <Stack width={"100%"} alignItems={"self-start"} paddingLeft={5}>
            <h1>HISTORY, PURPOSE AND USAGE</h1>
            <p style={{ fontFamily: "revert", fontSize: 20 }}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of
              Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.</p>
          </Stack>
        </Box>
      </Container>


    </Box>
  )
}
