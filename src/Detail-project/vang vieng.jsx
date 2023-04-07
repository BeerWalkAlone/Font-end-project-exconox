import React from 'react'
import { Box, Container, Typography, Card, Button } from '@mui/material'
import Img from '../img/Vang Vieng Travel Guide.jpg'
import CardTravelIcon from '@mui/icons-material/CardTravel'
import HikingIcon from '@mui/icons-material/Hiking'
import CardVV from '../CardProject/CardVV'

import Img1 from '../img/VangVieng/tham-jang.jpg'
import Img2 from '../img/VangVieng/Tham Phu Kham.jpg'
import Img3 from '../img/VangVieng/Inthira Vangvieng.jpg'
import TourIcon from '@mui/icons-material/Tour';

export default function vangvieng() {

    const data = [
        {
            id: 1, img: Img1, title: 'Tanjiang Karst Cave is also known as Tamu Chang Cave. It is the famous cave of Vang Vieng. The main cave itself is not an attraction, but it offers gorgeous views of the river valley through gaps in the limestone walls. Tanjiang Karst Cave is not famous for the cave, but for the small pool outside the cave.'
        },
        {
            id: 2, img: Img2, title: 'The huge Tempukan cave is a sacred place in the hearts of Lao people. The reason for its popularity is because of the lagoon in the cave. The main cave houses a Thai-style bronze reclining Buddha. There are several deep tunnels that can be divided from the main cave. Cha into the mountainside. '
        },
        {
            id: 3, img: Img3, title: 'This hotel has a great view and location is right in town - if you do not mind all the noisy motor boats passing in front of you, especially in the late afternoon, then it is fine. If you are looking for a quiet place, then maybe this is not the right hotel. We had lunch on the deck, we ate there twice because we liked the food and atmosphere.'
        }
    ]

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
                      <CardTravelIcon fontSize='large' /> Vang Vieng, Vientiane province 
                  </Typography>
              </Box>
          </Box>

          <Box sx={{
              marginTop: 4
          }}>
              <Typography paddingLeft={6} fontSize={20}>
                  <HikingIcon /> Vang Vieng
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

          <Typography paddingLeft={6} fontSize={24} variant='caption'>
              <TourIcon /> Other attractions in Vang Vieng.
          </Typography>

          <Box sx={{ mt: 0 }} display='flex' justifyContent='space-between' flexWrap='wrap' paddingLeft={2} paddingBottom={5}>
              {data.map(row =>
                  <Box mt={5} key={row}>
                      <CardVV
                          key={row.id}
                          img={row.img}
                          title={row.title}
                      />
                  </Box>
              )}
          </Box>

      </Container>
  )
}
