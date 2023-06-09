import React, { useEffect, useContext, useState } from 'react'
import { userContext } from './index'
import { Container, TextField, Typography, Box, Stack, Button, Divider, Avatar, Card, FormControl, InputLabel, OutlinedInput, InputAdornment, MenuItem, IconButton } from "@mui/material"
import Img from '../Images/meme.png'
import axios from 'axios'

export default function Profile() {

  const [userprofiledata, setuserprofiledata] = useState({})

  const { userInfo , setuserInfo} = useContext(userContext)
  useEffect(() => {
    axios({
      url: window.$api + '/users/' + userInfo.id,
      method: 'get',
    }).then(res => {
      console.log(res.data)
      setuserprofiledata(res.data[0])
    })
  }, [userInfo.id])

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name)
    let name = e.target.name
    let value = e.target.value
    setuserprofiledata(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleUpdate = () => {
    axios({
      url: window.$api + '/updateUser/' + userInfo.id,
      method: 'put',
      data: {
        username: userprofiledata.username,
        email: userprofiledata.email,
        firstname: userprofiledata.firstname,
        lastname: userprofiledata.lastname
      }
    })
  }

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
  const handleGetupImage = (e) => {
    let file = e.target.files[0]
   
    let formData = new FormData()
    formData.append('image',file)
    formData.append('id',userInfo.id)

    axios({
      url: window.$api +'/uploadProfileImage',
      method:'post',
      data: formData,
      headers: {
        'Content-Type':'multipart/from-data'
      }
    }).then(res => {
     setuserInfo({...userInfo, img:res.data.data.img})
    })
  }
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
              <IconButton component="label">
                <Avatar sx={{ width: 200, height: 200, fontSize: 60 }} src={window.$api + '/image/' + userInfo.img} alt='' />
                <input type='file' hidden accept='image/*' onChange={handleGetupImage}/>
              </IconButton>
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

          <Button onClick={handleUpdate}>Update</Button>
          <h2 style={{ paddingLeft: 20, paddingTop: 10 }}>Account</h2><hr />

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Username</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 40 }}>
              <TextField fullWidth label="Username" id="Username" name='username' value={userprofiledata?.username || ""} onChange={handleChange} />
            </Box>
          </Box>

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Email</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 44 }}>
              <TextField fullWidth id="standard-basic" label="Email" variant="outlined"
                value={userprofiledata?.email || ""} name='email' onChange={handleChange} />
            </Box>
          </Box>

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Firstname</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 40.1 }}>
              <TextField fullWidth id="standard-basic" label="firstname" variant="outlined" name='firstname'
                value={userprofiledata?.firstname || ""} onChange={handleChange} />
            </Box>
          </Box>

          <Box display={'flex'} flex={1} pt={5} paddingLeft={5}>
            <Box >
              <h3 style={{ color: '#A9A9A9' }}>Lastname</h3>
            </Box>
            <Box sx={{ width: 500, maxWidth: '100%', paddingLeft: 40 }}>
              <TextField fullWidth id="standard-basic" label="lastname" variant="outlined" name='lastname'
                value={userprofiledata?.lastname || ""} onChange={handleChange} />
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
