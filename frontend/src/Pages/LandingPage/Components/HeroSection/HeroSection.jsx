import React from 'react'
import { Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/system';
import Image from '../../../../assets/books-bg.jpg'
const HeroSection = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(4),
        color: 'white'
      }}
    >
      {/* Tagline */}
      <Typography variant="h2" align="center" gutterBottom>
        Discover. Discuss. Delve Deeper.
      </Typography>

      {/* Brief Description */}
      <Typography variant="h6" align="center" gutterBottom>
        Join our community to explore amazing books and engage in enlightening discussions.
      </Typography>

      {/* CTA Button */}
      <Button variant="contained" color="secondary" size="large">
        Start Your Journey
      </Button>
    </Box>
  )
}

export default HeroSection