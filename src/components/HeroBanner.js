import React from 'react'
import { Box, Typography, Button } from '@mui/material'

import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position='relative' p='20px'>
        <Typography fontWeight={600} color='#e1d78f' lineHeight='80px' sx={{ fontSize: {lg: '100px', xs: '80px'}, display: 'block'}}>
          WORK OUT
        </Typography>
        <Typography fontWeight={600} color='#FFF' sx={{ fontSize: {lg: '60px', xs: '40px'}, display: 'block'}} mb='23px'>
          WITH ME
        </Typography>
        <Typography fontSize='20px' lineHeight='20px' mb={4}>
          Check out the most effective exercises
        </Typography>
        <Button className='explore-btn' href='#exercises' sx={{ border: '1px solid #CACC90', color: '#fff', padding: '20px', borderRadius: '30px' }}>
          Explore Exercises
        </Button>
        <Typography fontWeight={600} color='#cddd97' sx={{ opacity: 0.05, display: { lg: 'block', xs: 'none'} }} fontSize='200px' mt='50px'>
          Exercises
        </Typography>
        <img src={HeroBannerImage} alt='banner' className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner