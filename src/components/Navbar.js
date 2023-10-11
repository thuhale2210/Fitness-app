import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'

import Logo from '../assets/images/Logo.png'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: { sm: '122px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }}
      px='20px'>
      <Link>
        <img src={Logo} alt="logo" style={{ width: '200px', margin: '0 20px' }}
/>
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontSize="20px"
        alignItems="flex-end"
      >
        <Link to='/Fitness-app' style={{ textDecoration: 'none', color: '#FFF', borderBottom: '3px solid #cddd97' }}>Home</Link>
        <a href='#exercises' style={{ textDecoration: 'none', color: '#FFF' }}>Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar