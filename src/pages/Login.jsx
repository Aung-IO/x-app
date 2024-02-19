import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!email || !password) {
      setHasError(true);
    } else {
      setHasError(false);
    }

    return false;
  };

  return (
    <Container>
      <Box
        sx={{
          mt: 16,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Login</Typography>
      </Box>
      <Box
        component="form"
        sx={{ mt: 4, display: "flex", flexDirection: "column" }}
        onSubmit={() => handleSubmit()}
      >
        <TextField
          margin="normal"
          id="email"
          label="email"
          variant="outlined"
          required
          fullWidth
          autoFocus
          autoComplete="email"
          inputRef={emailRef}
        />
        <TextField
          margin="normal"
          id="password"
          label="password"
          type="password"
          variant="outlined"
          required
          fullWidth
          autoComplete="current-password"
          inputRef={passwordRef}
        />
        {hasError && (
          <Alert severity="error">Please enter your email and password.</Alert>
        )}
        <Button
          variant="contained"
          sx={{
            mt: 2,
            mb: 3,
            backgroundColor: "login.background",
            color: "white",
          }}
          type="submit"
        >
          Login
        </Button>
        <Grid container>
          <Grid item xs>
            <Link to="#">Forgot password?</Link>
          </Grid>
          <Grid item>
            <Box>
              Don't have an account,<Link to="/register"> Sign Up</Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
