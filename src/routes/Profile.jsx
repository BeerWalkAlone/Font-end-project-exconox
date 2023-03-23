import React from 'react'
import { Container, TextField, Typography, Box, Stack, Button, Divider, Avatar, Card, FormControl, InputLabel, OutlinedInput, InputAdornment, MenuItem } from "@mui/material"
import Img from '../Images/meme.png'
import { fontFamily, fontSize } from '@mui/system'
export default function Profile() {

  const Language = [
    {
      value: 'English',
      label: 'English'
    },
    {
      value: 'Laos',
      label: 'Laos'
    },
    {
      value: 'Thailand',
      label: 'Thailand'
    },
  ]
  // background: linear - gradient(90deg, #1CB5E0 0 %, #000851 100 %);
  return (
    <Box sx={{
      background: 'rgb(124, 185, 232)',
      // background: '-webkit-linear-gradient(to right, #D6A4A4, #DAE2F8)',
      background: 'linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)',
      height: "100%"
    }}>
      <Container maxWidth='lg' sx={{ flexDirection: { md: 'row', xs: 'column' }, paddingTop: 5 }} >


        <Card sx={{ maxWidth: 1200, background: 'AliceBlue' }}>
          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <Avatar sx={{ width: 200, height: 250 }}>
                <img src={Img} alt="" />
              </Avatar>
            </Box>
            <Box paddingLeft={30}>
              <h1 style={{ fontSize: 44, fontFamily: 'revert-layer' }}>John Wick</h1>
              <Box display={'flex'}>
                <a href='https://www.w3schools.com/html/html_links.asp' style={{ fontSize: 28, fontFamily: 'revert-layer', color: '#6495ED' }} >Johnwick@hotmail.com</a>
                <p style={{ fontSize: 28, fontFamily: 'revert-layer', marginTop: 2 }}>-Administrator</p>
              </Box>

              <Box display={'flex'}>
                <p style={{ fontSize: 20, fontFamily: 'revert-layer', marginTop: 2, color: '#B0C4DE' }}>Avatar by </p>
                <a href='https://th.gravatar.com/' style={{ fontSize: 20, fontFamily: 'revert-layer', color: '#6495ED', paddingLeft: 4 }} >gravatar.com.</a>
                <p style={{ fontSize: 20, fontFamily: 'revert-layer', marginTop: 2, paddingLeft: 10, color: '#B0C4DE' }}> Or upload your own... </p>
              </Box>
            </Box>
          </Box>
          <h2 style={{ paddingLeft: 20, paddingTop: 10 }}>Account</h2><hr />

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Username</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 40 }}>
              <TextField fullWidth label="Username" id="Username" />
            </Box>
          </Box>

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Email</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 44 }}>
              <TextField fullWidth id="standard-basic" label="Email" variant="outlined" />
            </Box>
          </Box>

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Password</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 40.1 }}>
              <TextField fullWidth id="standard-basic" label="Password" variant="outlined" type="password" />
            </Box>
          </Box>

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Full name</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 40 }}>
              <TextField fullWidth id="standard-basic" label="john Wick 4" variant="outlined" />
            </Box>
          </Box>

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Title</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 45.2 }}>
              <TextField fullWidth id="standard-basic" label="Title" variant="outlined" />
            </Box>
          </Box>

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Language</h3>
            </Box>
            <Box sx={{ width: 300, maxWidth: '100%', paddingLeft: 40 }}>
              <TextField fullWidth
                id="outlined-select-Language"
                select
                label="Select"
                defaultValue="English"
                helperText="Please select your Language"
              >
                {Language.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          </Box>
        </Card>
      </Container>
    </Box>
  )
}
