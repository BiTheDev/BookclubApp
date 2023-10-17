import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const JoinUs = () => {
  return (
    <Box p={4} bgcolor="background.default" textAlign="center">
      <Typography variant="h3" gutterBottom>
        Ready to Dive into a World of Books?
      </Typography>

      <Typography variant="h6" color="textSecondary" mb={4}>
        Join our thriving community of book enthusiasts, participate in discussions, 
        attend events, and discover your next favorite book.
      </Typography>

      <Button variant="contained" color="primary" size="large" mr={2}>
        Register Now
      </Button>
      <Button variant="outlined" color="primary" size="large">
        Sign In
      </Button>

      {/* If you have a mobile app: */}
      {/* 
      <Box mt={4}>
        <Button variant="contained" color="secondary" size="large" mr={2}>
          Download on App Store
        </Button>
        <Button variant="contained" color="secondary" size="large">
          Get it on Google Play
        </Button>
      </Box>
      */}
    </Box>
  )
}

export default JoinUs