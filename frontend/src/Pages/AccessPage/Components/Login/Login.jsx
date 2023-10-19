import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/users/login", {
        email,
        password,
      });
      localStorage.setItem("jwtToken", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.response.data);
    }
  };

  return (
    <Paper style={{ padding: "16px", maxWidth: "400px", margin: "0 auto" }}>
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              fullWidth
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Login;
