import React from 'react'
import { Container, TextField, Typography, Box, Stack, Button } from "@mui/material"
import Card from '../components/Card'
export default function project() {
  const data = [1, 2, 3,4,5,6,7,8,9]
  return (
    <Box sx={{
      background: 'rgb(124, 185, 232)',
      background: '-webkit-linear-gradient(to right, #1d2b64, #f8cdda)',
      background: 'linear-gradient(to right, #1d2b64, #f8cdda)',
      height: "100%"
    }}>

      <Container maxWidth='lg' sx={{ paddingTop: 5 }}>
        <Typography align='center' variant='h3'>Out Project</Typography>
        <Box sx={{ mt: 5 }} display='flex' justifyContent='space-between'flexWrap='wrap'>      
          {data.map(row =>
          <Box mt={5} kay={row}>
              <Card />
          </Box>
          )}
        </Box>
      </Container>
    </Box>
  )
}
