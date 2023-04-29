import React, { useEffect, useState } from 'react'
import { Container, Typography, Box, Stack, Button } from "@mui/material"
import Card from '../components/Card'
// import ImgPTL from '../image/Pha That Luang .jpg'
// import ImgPM from '../image/luang-prabang.jpg'
// import ImgWXT from '../image/Wat Xieng Thong.png'
// import ImgVV from '../image/Vang Vieng Travel Guide.jpg'
// import ImgPJ from '../image/The plan of jar.jpg'
// import ImgVP from '../image/Vat Phou.jpg'

import axios from 'axios'
export default function project() {
  const [projectData, setprojectData] = useState([])

  useEffect(() => {
    axios({
      url: window.$api + '/project',
      method: 'get'
    }).then(res => {
      setprojectData(res.data)
    })
  }, [])



  return (
    <Box
    sx={{
      background: 'rgb(124, 185, 232)',
      background: '-webkit-linear-gradient(to right, #1d2b64, #f8cdda)',
      background: 'linear-gradient(to right, #1d2b64, #f8cdda)',
      height: "100%"
    }}
    >

      <Container maxWidth='lg' sx={{ paddingTop: 5 }}>
        <Typography align='center' variant='h3'>Best Places to Travel in Laos</Typography>

        <Box sx={{ mt: 5 }} display='flex' justifyContent='space-between' flexWrap='wrap'>
          {projectData.map(row =>
            <Box mt={5} key={row.id}>
              <Card
                title={row.projectName}
                description={row.projectDescription}
                img={row.projectImg}                   
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}

