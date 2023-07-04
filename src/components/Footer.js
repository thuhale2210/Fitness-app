import React from 'react'
import { Typography, Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Footer = () => {
  return (
    <Stack sx={{ alignItems: 'center' }}>
      <Typography sx={{ fontSize: { lg: '15px', xs: '10px' } }} mb='20px'>
        Made in 2023. With the help of JavaScript Mastery
      </Typography>
    </Stack>

  )
}

export default Footer