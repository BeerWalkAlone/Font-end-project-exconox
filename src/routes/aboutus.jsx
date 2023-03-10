import React from "react";
import { Container, TextField, Typography, Box, Stack, Button, Divider } from "@mui/material"
import Images from "../Images/eco.jpg"
import CardAboutus from "../components/CardAboutus";
import Imggreen from '../image/green.png'
import Imgphoto from '../image/photo (2).jpg'
import ImgEV from '../image/environment (2).png'
import ImgEV2 from '../image/biofuel.png'
export default function aboutus() {

  const data = [
    {
      id: 1, title: 'We raise awareness on conservation in the society', img: Imggreen, body2: 'Education is the most powerful weapon to change the world. We hope that providing a platform for Lao people to read, see and hear about the environmental issues as well as the positive changes happing in the world will be another force to make a change'
    },
    {
      id: 2, title: 'We bring the topic of the environment closer to you', img: ImgEV, body2: 'Our aim is to make the topic about the environment a subject close to your everyday life. We are bringing the news from around the world to Lao people’s eyes and at the same time bringing the stories happening in Laos to an international stage. Our followers will have a more easy-to-digest and quicker way to access the news.'
    },
    {
      id: 3, title: 'Power by Lao youth', img: ImgEV2, body2: 'We are the young journalists, environmentalists and change-makers who have the same mission of creating a healthy and sustainable environment. It is not just for the future but it has to be happening now.'
    },
  ]


  return (
    <Box sx={{
      background: '#f8f8ff',
      height: "160vh"
    }}>
      <Container maxWidth='xl' sx={{ flexDirection: { md: 'row', xs: 'column' }, alignItems: 'center', height: '100vh', paddingTop: 3 }}>

        <Typography flex={1} variant="h4" fontFamily={"monospace"} align="center">Our Story</Typography>

        <Box display={{ md: "flex", xs: 'block' }}>
          <Box display={"flex"} flex={1} alignItems={{ md: 'flex-end', xs: 'center' }} flexDirection='column' marginTop='10%'>

            <h4 style={{ fontSize: 24, fontFamily: 'monospace' }}>
              “Knowledge is the best weapon to fight against the environmental crisis”
            </h4>
            <Typography sx={{ fontSize: 20, fontFamily: 'Times New Roman", Times, serif' }}>
              The EcoNews Laos is a young news platform in Laos on the topic of environment. We believe that knowledge is the best weapon to fight against the environmental crisis.
              Our aim is to raise awareness and provide knowledge among the citizens about environmental issues and solutions in Laos and from around the globe by young and dynamic
              journalists.
            </Typography>
          </Box>

          <Box display={{ md: "flex", xs: 'block' }} flex={1} paddingTop={15} paddingLeft={5}>
            <img src={Images} alt="" width={'70%'} />
          </Box>
        </Box>

        <Box paddingTop={5}>
          <h1 flex={1} variant="h1" fontFamily={"monospace"} fontSize={20}>What we are working on</h1>
        </Box>
        <Box sx={{ mt: 5 }} display='flex' justifyContent='space-between' flexWrap='wrap' paddingLeft={0}>
          {data.map(row =>
            <Box mt={5} key={row}>
              <CardAboutus
                key={row.id}
                title={row.title}
                img={row.img}
                body2={row.body2}
              />
            </Box> 
          )}
          <Box paddingTop={5}>
            <img src={Imgphoto} alt="" width={'400px'} height={'500px'} />
          </Box>
          
        </Box>
      </Container>



    </Box>
  );
}
