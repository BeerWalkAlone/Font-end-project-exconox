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
          <p style={{ fontSize: 20 }}>We provide services for Environmental Impact Assessment, <br></br> Consultancy for Corporate Social Responsibi</p>
          <Button sx={{ backgroundColor: "brown", color: "yellow" }}
            onClick={() => handleNvigate("/about-us")}>Contact Us</Button>
        </Box>
        <Box width={{ md: '50%', xs: '100%' }} marginTop={'15vh'}>
          <img src={ImaBackground} alt="" width={'70%'} />
        </Box>
      </Container>
    </Box>
  )
}
