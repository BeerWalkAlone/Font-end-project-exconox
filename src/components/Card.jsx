import React from 'react'
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material/';
import Img from '../Images/meme.jpg'
export default function ProjectCard() {
    return (
        <Card sx={{maxWidth:340}}>
            <CardMedia
            component={'img'}
             height='200px' 
            
             image={Img}
            />
            <CardContent>
                <Typography variant='h5'gutterBottom>What you say?</Typography>
                <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam sint atque eligendi ab exercitationem odio fugit corporis? Hic ipsam id quas quisquam itaque modi, quis distinctio laboriosam veritatis assumenda?</Typography>
            </CardContent>
            <Button>Info</Button>
        </Card>
    )
}
