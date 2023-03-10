import React from 'react'
import { Button, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material/';


export default function ProjectCard(props) {
    return (
        <Card sx={{maxWidth:340}}>
            <CardMedia
            component={'img'}
             height='200px' 
            
                image={props.img}
            />
            <CardContent>
                <Typography variant='h5' gutterBottom>{props.title}</Typography>
                <hr />
                <Typography variant='body2'>{props.body2}</Typography>
            </CardContent>
            <Button>Info</Button>
        </Card>
    )
}
