import React from 'react'
import { Button, Card, CardContent, CardHeader, CardMedia, Typography, Box } from '@mui/material/';

export default function CardAboutus(props) {
    return (

        <Card sx={{ maxWidth: 340 }}>
            <Box sx={{
                background: '#f8f8ff',
                height: "100%"

            }}>
                <CardMedia
                    component={'img'}
                    height='240px'
                    width={'150'}
                    image={props.img} />
                <CardContent>
                    <Typography variant='h5' gutterBottom>{props.title}</Typography>

                    <Typography variant>{props.body2}</Typography>
                </CardContent>
                <Button>Info</Button>
            </Box>
        </Card>

    )
}
