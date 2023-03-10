import React from 'react'
import { Button, colors, Container } from '@mui/material'
import ImaBackground from '../Images/image1.png'
import { Box } from '@mui/system'
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate()
  const handleNvigate = (path) => {
    navigate(path)
  }
  return (
    <Box sx={{
      background: 'rgb(124, 185, 232)',
      background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);',
      height: "100vh"
    }}>
      <Container maxWidth='xl' sx={{ display: { md: 'flex', xs: 'block' }, alignItems: 'center', height: '100vh' }}>
        <Box width={{ md: '50%', xs: '100%' }}>
          <h1 style={{ marginTop: 0, fontSize: 50 }}> Welcome to ECONOX Laos</h1>
          <p style={{ fontSize: 20 }}>We provide services for Environmental Impact Assessment, Consultancy for Corporate Social Responsibi
            “Knowledge is the best weapon to fight against the environmental crisis”
            The EcoNews Laos is a young news platform in Laos on the topic of environment. We believe that knowledge is the best weapon to fight
            against the environmental crisis. Our aim is to raise awareness and provide knowledge among the citizens about environmental issues and
            solutions in Laos and from around the globe by young and dynamic journalists.</p>
          <Button sx={{ backgroundColor: "brown", color: "yellow" }}
            onClick={() => handleNvigate("/about-us")}>Contact Us</Button>
        </Box>
        <Box width={{ md: '50%', xs: '100%' }} marginTop={'15vh'} paddingLeft={5}>
          <img src={ImaBackground} alt="" width={'70%'} />
        </Box>
      </Container>
    </Box>
  )
}
