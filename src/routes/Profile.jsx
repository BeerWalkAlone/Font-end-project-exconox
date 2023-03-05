import React from 'react'
import { Container, TextField, Typography, Box, Stack, Button, Divider, Avatar} from "@mui/material"
import Img from '../Images/meme.jpg'
export default function Profile() {
  return (
    <Container>    
        <Box display={'flex'} flex={1} pt={5}>
          <Avatar sx={{width:200,height:250}}>
          <img src={Img} alt=""/>
          </Avatar>
           <h1>sinnakhon</h1>
        </Box>
    </Container>
  )
}
