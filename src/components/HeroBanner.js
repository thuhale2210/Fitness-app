import React from 'react'
import { Box, Stack, Typography, Button} from '@mui/material'

import HeroBannerImage from '../assets/images/banner.jpg'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {lg: '212px', xs: '70px'},
      ml: {sm: '50px'}
    }} position='relative' p='20px'>
        {/* <Typography color='#cddd97' fontWeight={600} fontSize='26px'>
            Fitness Club
        </Typography> */}
        <Typography fontWeight={600} color='#CDDD97' lineHeight='80px' sx={{ fontSize: {lg: '100px', xs: '80px'}, display: 'block'}}>
          WORK OUT
        </Typography>
        <Typography fontWeight={600} color='#FFF' sx={{ fontSize: {lg: '70px', xs: '50px'}, display: 'block'}} mb='23px'>
          WITH ME
        </Typography>
        <Typography fontSize='20px' lineHeight='20px' mb={4}>
          Check out the most effective exercises
        </Typography>
        <Button variant='contained' color='success' href='#exercises' sx={{ padding: '13px', borderRadius: '30px' }}>
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

//         <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>
