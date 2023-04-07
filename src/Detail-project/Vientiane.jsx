import React from 'react'
import { Box, Container, Typography, Card } from '@mui/material'
import Img from '../img/vientiane.png'
import CardTravelIcon from '@mui/icons-material/CardTravel'
import HikingIcon from '@mui/icons-material/Hiking';
import Img1 from '../img/vientiane/Patuxay Monument.jpg'
import Img2 from '../img/vientiane/Buddha Park.jpg'
import Img3 from '../img/vientiane/Crowne Plaza.jpg'
import CardVT from '../CardProject/CardVT'
import TourIcon from '@mui/icons-material/Tour';
export default function Vientiane() {

    const data = [
        {
            id: 1, img: Img1, title: 'The Vientiane Arc de Triomphe is located in the middle of the city and is a landmark building in Vientiane. The appearance is similar to the Arc de Triomphe in Paris, and it is also connected to the more prosperous avenues, but the internal structure has a strong Buddhist culture. '
        },
        {
            id: 2, img: Img2, title: 'Buddha Park (Buddha Park) is located on the Mekong River, about 25 kilometers southeast of Vientiane, also known as Xiangkun Temple. This is a sculpture park, which brings together nearly a hundred Buddha sculptures of various shapes and shapes, combining Buddhist and Hindu styles.'
        },
        {
            id: 3, img: Img3, title: 'Crowne Plaza Vientiane is situated in the heart of Las Vegas and is just a 15-minute drive from Wattay International Airport. The hotel offers free WiFi throughout and is conveniently located 0.7 miles from theaos National Museum and 1.2 miles from Wat Sisaket.'
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
                        <CardTravelIcon fontSize='large' /> VIENTIANE, LAO ວຽງຈັນ
                    </Typography>
                </Box>
            </Box>

            <Box sx={{
                marginTop: 4
            }}>
                <Typography paddingLeft={6} fontSize={22} variant='h1'>
                    <HikingIcon /> Located on the Northeastern bank of the Mekong River, Vientiane is the capital of Laos.
                </Typography>

                <Typography variant='body1' paddingLeft={11} fontSize={18} paddingTop={2}>
                    With less than a million inhabitants, Vientiane is the second smallest capital in Southeast Asia and has a laid-back atmosphere that is atypical of capitals all
                    over the world. Oftentimes, many a travellers can be seen taking a break along the riverside with a cold beer in hand as they take in the sunset. Equally common
                    are devotees offering gifts and being blessed by Buddhist monks.
                </Typography> <br />

                <Typography variant='body2' paddingLeft={11} fontSize={18}>
                    In Vientiane's architecture, one can identify the historical influence of the French and Thai, with villas that were built during colonial times and Thai-inspired
                    buildings dotting the city. There are also remnants of Vientiane's pre-colonial history, namely the two more important temples Vat That Luang and Hor Phra Keo,
                    which were from the 16th century when King Setthathirat made Vientiane the capital of the Kingdom of Lane Xang.
                </Typography>
                <br />
                <Typography variant='body2' paddingLeft={11} fontSize={18}>
                    Now that Vientiane is not a tourist city, but it still offers visitors the chance to experience the closest thing Laos has urban living. Recently the city has begun to grow and develop,
                    but that has fortunately resulted more in different restaurants, nice bars to drink Beerlao (the local brew), and better hotels than in ostentatious resorts or high rises.
                </Typography>
            </Box>
          
            <Box sx={{
                marginTop: 5,
                paddingLeft: 11
            }}>
                <a href="https://www.discoverlaos.today/destination/vientiane">#Reference Information</a>
            </Box>
            <br /><br />
            <Typography paddingLeft={6} fontSize={24} variant='caption'>
                <TourIcon /> Other attractions in Vientiane.
            </Typography>

            <Box sx={{ mt: 0 }} display='flex' justifyContent='space-between' flexWrap='wrap' paddingLeft={2} paddingBottom={5}>
                {data.map(row =>
                    <Box mt={5} key={row}>
                        <CardVT
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
