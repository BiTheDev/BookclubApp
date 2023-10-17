import React from 'react';
import { Box, Typography, IconButton, TextField, Button } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box p={4} bgcolor="background.paper" mt={4}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">

        <Box>
          <Typography variant="h6">Quick Links</Typography>
          <Box mt={2}>
            <Typography variant="body2" component="a" href="/about" display="block">About Us</Typography>
            <Typography variant="body2" component="a" href="/contact" display="block">Contact</Typography>
            <Typography variant="body2" component="a" href="/privacy-policy" display="block">Privacy Policy</Typography>
            <Typography variant="body2" component="a" href="/terms" display="block">Terms & Conditions</Typography>
          </Box>
        </Box>

        <Box mt={{ xs: 4, md: 0 }}>
          <Typography variant="h6">Follow Us</Typography>
          <Box mt={2} display="flex" gap={2}>
            <IconButton aria-label="Facebook" color="primary" component="a" href="#">
              <Facebook />
            </IconButton>
            <IconButton aria-label="Twitter" color="primary" component="a" href="#">
              <Twitter />
            </IconButton>
            <IconButton aria-label="Instagram" color="primary" component="a" href="#">
              <Instagram />
            </IconButton>
          </Box>
        </Box>

      </Box>

      <Box mt={4} textAlign="center">
        <Typography variant="body2" color="textSecondary">&copy; {new Date().getFullYear()} BookClub. All rights reserved.</Typography>
      </Box>
    </Box>
  )
}

export default Footer