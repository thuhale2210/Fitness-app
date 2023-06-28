import React, { useState, useEffect } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  return (
    <Box id='exercises'
      sx={{mt: { LG: '110px' }}}
      mt='50px'
      p='20px'
    >
      <Typography variant='h4' mb='46px'>
        Showing Results
      </Typography>
      <Stack direction='row' sx={{ gap: { lg: '110px', xs: '50px' }}} flexWrap='wrap' justifyContent='center'>
        {exercises ? exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        )) : null }
      </Stack>                  
    </Box>
  )
}

export default Exercises