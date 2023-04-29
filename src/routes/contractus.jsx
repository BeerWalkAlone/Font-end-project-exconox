import React from "react";
import { Container, TextField, Typography, Box, Stack, Button, Avatar } from "@mui/material";
import Img1 from '../Images/phone-icon.png'
import Img2 from '../Images/share.png'
import Img3 from '../Images/location.png'
import Img4 from '../Images/huglok.jpg'
import Img5 from '../Images/econox2.jpg'
import Img6 from '../Images/plastic.jpg'



import SendIcon from '@mui/icons-material/Send';
import { useNavigate } from "react-router-dom";


export default function contractus() {
  const navigate = useNavigate();
  const handleNvigate = (path) => {
    navigate(path);
  };

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
        <Box marginTop={10} paddingRight={4}>
          <Typography variant="h5" >Phone Number</Typography>
          <Box sx={{ marginLeft: 0, width: '100px' }}>
            <hr width={200} />
          </Box>
          <Typography variant="inherit" fontSize={20}>+856-20-5964-4074</Typography>
          <Typography variant="inherit" fontSize={20}>+856-20-2803-9022</Typography>
        </Box>

        <Box flex={1} marginTop={8}>
          <Box sx={{ paddingTop: 2, paddingLeft: 7 }}>
            <Avatar sx={{ width: 80, height: 80, background: '#eeeeee', boxShadow: ' 5px 5px #ababab' }}>
              <img src={Img2} alt="" width={80} height={80} />
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
          <Box sx={{ paddingTop: 2, paddingLeft: 3 }}>
            <Avatar sx={{ width: 80, height: 80, background: '#eeeeee', boxShadow: ' 5px 5px #ababab' }}>
              <img src={Img3} alt="" width={60} height={60} />
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

      <Box sx={{
        display: 'flex',
        paddingTop: 10
      }}>
        <Box flex={1}>
          <Typography variant="h4">
             Our Sponsor
          </Typography>
        </Box>
      </Box>
      <Container maxWidth='lg'>
        <Box sx={{
          display: 'flex',
          paddingTop: 5,
          cursor: "pointer"

        }}>
          <a href="https://m.facebook.com/Econoxlaos"><img src={Img4} width={450} height={400} /></a>
          <a href="https://m.facebook.com/Econoxlaos"><img src={Img5} width={450} height={400} /></a>
          <a href="https://m.facebook.com/Econoxlaos"><img src={Img6} width={450} height={400} /></a>
        </Box>
      </Container>

      <Box paddingTop={5}>
        <Typography variant="h5" fontFamily={'monospace'}>
          Talk with us here
        </Typography>
        <Box sx={{
          display: 'flex',
          paddingTop: 5,
          paddingBottom:5
        }}>
          <Box flex={1}>
            <TextField id="filled-basic" label="Fullname" variant="filled" fullWidth />
            <TextField id="filled-basic" label="Email" variant="filled" fullWidth />
            <TextField id="filled-basic" label="Subject" variant="filled" fullWidth />
          </Box>
          <Box flex={1} paddingLeft={2} sx={{ m: 0, width: '25ch' }}>
            <TextField id="filled-basic" label="Your message" variant="filled" multiline rows={6} fullWidth />
            <Box sx={{ paddingLeft: 23 }}>
              <Button variant="contained" endIcon={<SendIcon />} color='inherit'>
                Send
              </Button>
            </Box>
          </Box>
          <Box flex={1} paddingLeft={20}>
            <Typography variant="h5">
              Quick Link
            </Typography>
            <Box sx={{ cursor: "pointer", paddingLeft:8 , fontSize:18}}>
              <p onClick={() => handleNvigate('/')}>Home</p>
              <p onClick={() => handleNvigate('/project')}>Project</p>
              <p onClick={() => handleNvigate('/story')}>Story</p>
              <p onClick={() => handleNvigate('/about-us')}>About Us</p>
            </Box>
          </Box>
          <Box>
            <Typography variant="h5">
              Social Media
            </Typography>
            <Box sx={{paddingLeft:9}}>
              <a href="https://m.facebook.com/Econoxlaos">Facebook</a>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

