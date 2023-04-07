import React from 'react'
import { Container, Typography, Box, Stack, Button } from "@mui/material"
import Card from '../components/Card'
import ImgPTL from '../image/Pha That Luang .jpg'
import ImgPM from '../image/luang-prabang.jpg'
import ImgWXT from '../image/Wat Xieng Thong.png'
import ImgVV from '../image/Vang Vieng Travel Guide.jpg'
import ImgPJ from '../image/The plan of jar.jpg'
import ImgVP from '../image/Vat Phou.jpg'


export default function project() {

 

  const data = [
    {
      id: 1, title: 'Pha That Luang Vientiane', img: ImgPTL, body2: 'Phra That Luang or Phra Chedi Lok Chulamanee It is the most important religious place in Laos. It is a very important sanctuary of Vientiane. It can be said that who has come to Vientiane did not come to pay respect to Phra That Luang almost called Havent arrived in Vientiane at all.'

    },
    {
      id: 2, title: 'Luang Prabang', img: ImgPM, body2: 'Located in Northern Laos lies Luang Prabang which was once the royal capital of the country up until 1975. Tourists can explore the citys many Buddhist temples, like the Wat Xieng Thong and the Wat Mai!.Apart from these religious landmarks, Luang Prabang is also known for its natural wonders.'
    },
    {
      id: 3, title: 'Wat Xieng Thong', img: ImgWXT, body2: 'Wat Siang Thong is a magnificent and beautiful temple in Luang Prabang, located near the Mekong River. It was built by King Setthathirat in 1560 and was the private property of the royal family until 1975. The main hall represents the classic architectural style of Luang Prabang temples.'
    },
    {
      id: 4, title: 'Vang Vieng', img: ImgVV, body2: 'Vang Vieng is a small town whose bad reputation precedes it. Tubing, booze, drugs, wild nights, and… great sandwiches! In short, these are the ingredients that made Vang Vieng the eldorado for young backpackers in Laos a few years ago. Today, most of the bars along the river are closed or no longer serve alcohol.'
    },
    {
      id: 5, title: 'The plan of jar', img: ImgPJ, body2: 'The Plain of Jars is a megalithic archaeological landscape northeast of Laos. It consists of thousands of stone jars scattered around the upland valleys and the lower foothills of the central plain of the Xiangkhoang Plateau. The jars are arranged in clusters ranging in number from one to several hundreds.'
    },
    {
      id: 6, title: 'Vat Phou', img: ImgVP, body2: 'Champa Saiwapu Temple is one of the famous monuments in Laos and was included in the World Cultural Heritage List in 2001. Wat Phu is a 12th-century Khmer-style Brahmin complex situated at the foot of Mount Phu Kao.and the temples are all made of stone blocks carved with various patterns.'
    }
  ]


  return (
    <Box sx={{
      background: 'rgb(124, 185, 232)',
      background: '-webkit-linear-gradient(to right, #1d2b64, #f8cdda)',
      background: 'linear-gradient(to right, #1d2b64, #f8cdda)',
      height: "100%"
    }}>

      <Container maxWidth='lg' sx={{ paddingTop: 5 }}>
        <Typography align='center' variant='h3'>Best Places to Travel in Laos</Typography>
        <Box sx={{ mt: 5 }} display='flex' justifyContent='space-between' flexWrap='wrap'>
          {data.map(row =>
            <Box mt={5} kay={row}>
              <Card
                kay={row.id}
                title={row.title}
                img={row.img}
                body2={row.body2}
               
              />
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}
