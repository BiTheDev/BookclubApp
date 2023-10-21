import React, { useState, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Book, AccountCircle } from "@mui/icons-material";
import { Box, Menu, MenuItem } from "@mui/material";
import { AuthContext } from "../../authContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { authToken, setAuthToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null); // For dropdown
  const open = Boolean(anchorEl);

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setAuthToken(null);
    navigate("/");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Logo */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Book />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Bookclub App
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {authToken && (
            <Button href="/home" color="inherit">
              Home
            </Button>
          )}
          <Button color="inherit" href="/all-books">Browse Books</Button>
          {authToken && <Button color="inherit">Discussion Forums</Button>}
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Contact</Button>
        </Box>

        {/* CTA Buttons */}
        {authToken ? (
          <>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              color="inherit"
              onClick={handleMenu}
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={() => { handleClose(); navigate("/profile"); }}>
                Profile
              </MenuItem>
              <MenuItem onClick={() => { handleClose(); navigate("/settings"); }}>
                Settings
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                Logout
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Button href="/access" variant="contained" color="secondary">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
