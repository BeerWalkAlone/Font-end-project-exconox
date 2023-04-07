import React from "react";
import { Container, TextField, Typography, Box, Stack, Button, Avatar } from "@mui/material";
import Img1 from '../Images/phone-icon.png'


export default function contractus() {
  return (
    <Container maxWidth='lg'>
      <Box sx={{ paddingTop: 4 }}>
        <Typography variant="h4">Let's Connect</Typography>
        <br />
        <Typography variant="body1" fontSize={16}>
          We love to hear from you. Whether you are curious about our articles, organization, or even just want ot talk with us - we are open to answer all enquiries.
        </Typography>
      </Box>

      <Box display={'flex'}>
        <Box flex={1} marginTop={8}>
          <Box sx={{ paddingRight: 3, paddingTop: 2 }}>
            <Avatar sx={{ width: 80, height: 80, background: '#eeeeee', boxShadow: ' 5px 5px #ababab' }}>
              <img src={Img1} alt="" width={80} height={80} />
            </Avatar>
          </Box>
        </Box>
        <Box  marginTop={10} paddingRight={4}>
          <Typography variant="h5" >Phone Number</Typography>
          <Box sx={{ marginLeft: 0, width: '100px' }}>
            <hr width={200} />
          </Box>
          <Typography variant="inherit" fontSize={20}>+856-20-5964-4074</Typography>
          <Typography variant="inherit" fontSize={20}>+856-20-2803-9022</Typography>
        </Box>

        <Box flex={1} marginTop={8}>
          <Box sx={{  paddingTop: 2, paddingLeft:7}}>
            <Avatar sx={{ width: 80, height: 80, background: '#eeeeee', boxShadow: ' 5px 5px #ababab' }}>
              <img src={Img1} alt="" width={80} height={80} />
            </Avatar>
          </Box>
        </Box>
        <Box flex={5} marginTop={10} paddingLeft={3}>
          <Typography variant="h5" >Online Contact</Typography>
          <Box sx={{ marginLeft: 0, width: '100px' }}>
            <hr width={200} />
          </Box>
          <Typography variant="inherit" fontSize={20}>Email: econox.laos@gmail.com</Typography>
          <Typography variant="inherit" fontSize={20}>Facebook: @econewslao</Typography>
        </Box>

        <Box flex={1} marginTop={8}>
          <Box sx={{ paddingTop: 2, paddingLeft:3}}>
            <Avatar sx={{ width: 80, height: 80, background: '#eeeeee', boxShadow: ' 5px 5px #ababab' }}>
              <img src={Img1} alt="" width={80} height={80} />
            </Avatar>
          </Box>
        </Box>
        <Box flex={5} marginTop={10} paddingLeft={2}>
          <Typography variant="h5" >Location</Typography>
          <Box sx={{ marginLeft: 0, width: '100px' }}>
            <hr width={200} />
          </Box>
          <Typography variant="inherit" fontSize={20}>Ban Naxay, Saysettha District, Vientiane</Typography>
          <Typography variant="inherit" fontSize={20}>Capital, Lao PDR</Typography>
        </Box>

      </Box>
    </Container>
  )
}

