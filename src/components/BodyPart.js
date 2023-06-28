import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={
            bodyPart === item ? {
                background: '#FFFFFF60',
                borderRadius: '20px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                '-webkit-backdrop-filter': 'blur(5px)',
                width: '240px',
                height: '252px',
                cursor: 'pointer',
                gap: '30px'
            } : {
                background: '#FFFFFF30',
                borderRadius: '20px',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(5px)',
                '-webkit-backdrop-filter': 'blur(5px)',
                width: '240px',
                height: '252px',
                cursor: 'pointer',
                gap: '30px'
            }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
        }}
    >
        <img src={Icon} alt="dumbbell" style={{ width: '60px', height: '60px' }} />
        <Typography fontSize="24px" fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
);

export default BodyPart; 