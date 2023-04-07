import React from 'react'
import { Box, Container, Typography } from '@mui/material'
import Img from '../img/Luang-Prabang.jpg'
import CardTravelIcon from '@mui/icons-material/CardTravel'
import HikingIcon from '@mui/icons-material/Hiking';
import CardLB from '../CardProject/CardLB';
import Img1 from '../img/LuangPB/Street-in-Luang-Prabang.jpg'
import Img2 from '../img/LuangPB/waterfalls.jpg'
import Img3 from '../img/LuangPB/image.jpg'
import TourIcon from '@mui/icons-material/Tour';
export default function App() {
    const data = [
        {
            id: 1, img: Img1, title:'The afternoons were spent exploring the town of Luang Prabang. It is a beautiful city, with its French architecture accented with palm trees and tuk-tuks. Most signs are written in Laotian and French, although we saw a fair amount of English and Chinese as well. The four of us have been learning how to read Chinese characters in preparation for China and we love trying to decipher the signs.'
        },
        {
            id: 2, img: Img2, title:'Kuang Si Falls near Luang Prabang is one of the most beautiful natural attractions in Laos, and a must-visit destination for anyone traveling to the region. This stunning series of cascading waterfalls and turquoise pools is set in a picturesque jungle landscape, and offers visitors an unforgettable experience of natural beauty and tranquility.'
        },
        {
            id: 3, img: Img3, title:'The first bullet train to serve the Laos-China high-speed railway was delivered to the Lao capital Vientiane at the weekend, but six weeks before the line is set to open, villagers who lost land to the project say they are still waiting for promised compensation.'
        }
    ]

    return (
        <Container maxWidth='xl' sx={{ flexDirection: { md: 'row', xs: 'column' }, alignItems: 'center', height: '100vh', paddingTop: 3 }}>
            <Box display={'flex'}>
                <Box sx={{
                    flex: 1,
                    paddingTop: 5,
                    paddingLeft: 15,


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
                        <CardTravelIcon fontSize='large' /> Luang Prabang province
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                marginTop: 4
            }}>
                <Typography paddingLeft={6} fontSize={20}>
                    <HikingIcon /> Luang Prabang
                </Typography>

                <Typography variant='h5' paddingLeft={11} fontSize={18} paddingTop={2}>
                    While LuangPrabang is considered the tourism hub of Laos, it never feels like a bustling tourist trap found around the region. The languid pace,
                    friendly faces and picturesque landscapes will more than make up for almost any weather conditions that may come your way.
                </Typography> <br />

                <Typography paddingLeft={11} fontSize={18}>
                    Luang Prabang was once the royal capital until Vientiane became the administrative capital in 1946. Today, it remains as the most visited city in Laos.
                    90 percent of the people in the country work in agricul- ture, with rice accounting for 80 percent of agricultural production in Laos. This is an unspoiled
                    destination that has yet to be discovered en masse – its religion, culture and tradition still tenacious. A natural beauty, Luang Prabang is surrounded by mountains
                    and is 700 metres above sea level at the confluence of the Nam Khan and Mekong Rivers.
                </Typography>
                <br />
                <Typography paddingLeft={11} fontSize={18}>
                    The city’s old-world charm is made up of over 2,000 saffron-clad monks living in 33 gilded Buddhist temples and monastries, breath- taking scenery, sustainable community outreach programmes,
                    rich culture and Gallic villas revived as boutique hotels.
                </Typography>
            </Box>
            <Box sx={{
                marginTop: 5,
                paddingLeft: 11
            }}>
                <a href="https://www.discoverlaos.today/destination/luangprabang">#Reference Information</a>
            </Box>
            <br /><br />
            <Typography paddingLeft={6} fontSize={24} variant='caption'>
                <TourIcon /> Other attractions in Luang Prabang.
            </Typography>

            <Box sx={{ mt: 0 }} display='flex' justifyContent='space-between' flexWrap='wrap' paddingLeft={2} paddingBottom={5}>
                {data.map(row =>
                    <Box mt={5} key={row}>
                        <CardLB
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
