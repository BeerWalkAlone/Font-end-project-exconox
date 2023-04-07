import React from 'react'
import { Box, Container, Typography, Card, Button } from '@mui/material'
import Img from '../img/Wat-Xiengthong.jpg'
import CardTravelIcon from '@mui/icons-material/CardTravel'
import HikingIcon from '@mui/icons-material/Hiking'
import TourIcon from '@mui/icons-material/Tour';

export default function () {
    // const data = [
    //     {
    //         id: 1, img: Img1, title: ''
    //     },
    //     {
    //         id: 2, img: Img2, title: ''
    //     },
    //     {
    //         id: 3, img: Img3, title: ''
    //     }
    // ]
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
                      <CardTravelIcon fontSize='large' /> Wat Xieng Thong, Luang Prabang province
                  </Typography>
              </Box>
          </Box>

          <Box sx={{
              marginTop: 4
          }}>
              <Typography paddingLeft={6} fontSize={20}>
                  <HikingIcon /> Wat Xieng Thong
              </Typography>

              <Typography variant='h5' paddingLeft={11} fontSize={18} paddingTop={2}>
                  Vang Vieng is a pristine small town between Vientiane and Luang Prabang, with limestone cliffs and paddy fields dotting its landscape.
                  Given that the Nam Song River runs through the town, water sports such as tubing and kayaking are popular - you'll often see young travellers sitting
                  in large inner tubes floating downstream.  For those who are drawn to water, Vang Vieng is also near Tham Poukham, which has an inviting blue lagoon for
                  tourists to swim in.  The adventurous may also wish to explore the many limestone caves nearby, including one above the lagoon where a golden statue of a
                  sleeping Buddha reside amidst unique rock formations.  Several 16th and 17th monasteries and small Hmong villages are also nearby.  Today, Vang Vieng attracts
                  tourists with its geological beauty and rural appeal.
              </Typography> <br />

              <Typography paddingLeft={11} fontSize={18}>
                  Yet Vang Vieng was once used as a base and airfield for the CIA's covert operations in Indochina from the 1950s to 1970s.  After the Americans withdrew, Vang Vieng's
                  bloody past was overshadowed by its more recent reputation as a must-visit for backpackers, who were emboldened to party wildly with the open sales of drugs and booze.
                  However, after several widely-publicised tragedies brought international attention to the excesses of the region, the government put a stop to the mania with sales bans
                  and curfews.
              </Typography>
              <br />
          </Box>

          <Box sx={{
              marginTop: 5,
              paddingLeft: 11
          }}>
              <a href="https://www.discoverlaos.today/destination/vang-vieng#contentTop">#Reference Information</a>
          </Box>
          <br /><br />

        

          {/* <Box sx={{ mt: 0 }} display='flex' justifyContent='space-between' flexWrap='wrap' paddingLeft={2} paddingBottom={5}>
              {data.map(row =>
                  <Box mt={5} key={row}>
                      <CardVV
                          key={row.id}
                          img={row.img}
                          title={row.title}
                      />
                  </Box>
              )}
          </Box> */}

      </Container>
  )
}
