import React from 'react'
import { Box, Container, Typography, Card } from '@mui/material'
import Img from '../img/Xieng Khouang.jpeg'
import CardTravelIcon from '@mui/icons-material/CardTravel'
import HikingIcon from '@mui/icons-material/Hiking';

export default function Xiengkhouang() {


  return (
      <Container maxWidth='xl'>
          <Box display={'flex'}>
              <Box sx={{
                  flex: 1,
                  paddingTop: 5,
                  paddingLeft: 17,
              }}>
                  <img src={Img} alt="" maxWidth />
              </Box>
          </Box>
          <Box display={'flex'}>
              <Box sx={{
                  flex: 1,
                  marginTop: 5
              }}>
                  <Typography variant='h4' fontSize={30} fontFamily={'cursive'}>
                      <CardTravelIcon fontSize='large' /> XIENG KHOUANG
                  </Typography>
              </Box>
          </Box>

          <Box sx={{
              marginTop: 4
          }}>
              <Typography paddingLeft={6} fontSize={22} variant='h1'>
                  <HikingIcon /> Located 400km Northeast of Vientiane, Xieng Khouang is arguably the most beautiful town in Laos.
              </Typography>

              <Typography variant='body1' paddingLeft={11} fontSize={18} paddingTop={2}>
                  It is set at an altitude of 1,200 meter above the sea leveland so you con enjoys mild temperatures for most of the year, although winters can be surprisingly cold.
                  Kham District is a low-laying basin set at around 600 meters above the sea level.
              </Typography> <br />

              <Typography variant='body2' paddingLeft={11} fontSize={18}>
                  The province borders Vietnam to the East and Luang Prabang to the West. Xieng Khouang has a long and rich history and is home to numerous ethnic groups,
                  including Thai Phuan, Hmong, Khmu and Thai Dam.
              </Typography><br />
              <Typography variant='body2' paddingLeft={11} fontSize={18}>
                  Phonsavanh, the new provincial capital, is located in Paek District and caters to increasing numbers of national and international tourists. There are two flights a
                  day from Vientiane to the airport in Phonsavanh.
              </Typography>
              <br />
          </Box>
        
          <Box sx={{
              marginTop: 5,
              paddingLeft: 11
          }}>
              <a href="https://www.discoverlaos.today/destination/vientiane">#Reference Information</a>
          </Box>
<br /><br />
      </Container>
  )
}
