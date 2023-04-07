import React from 'react'
import { Button, Card, CardContent, CardHeader, CardMedia, Typography, Box } from '@mui/material/';

export default function CardVT(props) {
  return (
      <Card>
          <Box sx={{
              background: '#f8f8ff',
              // height: 400,
              height: 465,
              width: 450
          }}>
              <CardMedia
                  component={'img'}
                  height='300px'
                  width={'150'}
                  image={props.img}
              />
              <CardContent>
                  <Typography variant='body2'>{props.title}</Typography>
              </CardContent>
          </Box>
      </Card>
  )
}
