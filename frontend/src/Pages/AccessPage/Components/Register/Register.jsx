import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,16})/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      setPasswordError("Passwords don't match!");
      return;
    }

    if (!passwordPattern.test(password)) {
      setPasswordError("Password does not meet the criteria.");
      return;
    }

    try {
      const response = await axios.post("/api/users/register", {
        username,
        email,
        password,
      });
      localStorage.setItem("jwtToken", response.data.token);
      navigate("/home");

      // You can add a redirection to login or show a success message here
    } catch (error) {
      console.error("Registration failed:", error.response.data);
    }
  };

  return (
    <Paper style={{ padding: "16px", maxWidth: "400px", margin: "0 auto" }}>
      <Typography variant="h5">Register</Typography>
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
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <TextField
              fullWidth
              label="Retype Password"
              type="password"
              variant="outlined"
              value={retypePassword}
              onChange={(e) => setRetypePassword(e.target.value)}
              error={passwordError ? true : false}
              helperText={passwordError}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  );
};

export default Register;
