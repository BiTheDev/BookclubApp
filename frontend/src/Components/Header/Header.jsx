import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Book } from '@mui/icons-material';
import { Box } from '@mui/system';
import { AuthContext } from '../../authContext';

const Header = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setAuthToken(null);
    history.push('/');
  }

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo */}
        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
          <Book /> {/* You can replace this with your Logo */}
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookclub App
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button href="/home" color="inherit">Home</Button>
          <Button color="inherit">Browse Books</Button>
          <Button color="inherit">Discussion Forums</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        {/* CTA Buttons */}
        { authToken ? (
        <Button variant="contained" color="secondary" onClick={handleLogout}>Logout</Button>
      ) : (
        <Button href="/access" variant="contained" color="secondary">Login</Button>
      )}
      </Toolbar>
    </AppBar>
  )
}

export default Header