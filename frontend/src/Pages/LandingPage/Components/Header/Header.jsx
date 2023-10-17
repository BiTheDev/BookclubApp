import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';

const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <MenuIcon /> {/* You can replace this with your Logo */}
        </IconButton>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookclub App
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Browse Books</Button>
          <Button color="inherit">Discussion Forums</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        {/* CTA Buttons */}
        <Button color="secondary" variant="contained">Login</Button>
        <Button color="secondary" variant="outlined" sx={{ ml: 2 }}>Register</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header