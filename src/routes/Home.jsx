import React from 'react'
import { Button, Container } from '@mui/material'
import ImaBackground from '../Images/image1.png'
import { Box } from '@mui/system'
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate ()
  const handleNvigate = (path) =>{
    navigate(path)
  }
  return (
    <Container maxWidth='xl' sx={{display: {md:'flex', xs:'block'}, height:'100vh', marginTop:15}}>

    <Box flex={1}>
      <h1> Welcome to ECONOX Laos</h1>
      <p style={{fontSize: 20}}>We provide services for Environmental Impact Assessment, <br></br> Consultancy for Corporate Social Responsibi</p>
      <Button onClick={() => handleNvigate("/about-us")}>Contact Us</Button>
    </Box>
    <Box flex={1}>
      <img src={ImaBackground} alt="" width={'70%'}/>
    </Box>
    </Container>
  )
}
