import {
  Alert,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const comfirmPasswordRef = useRef();
  const usernameRef = useRef();
  const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const username = usernameRef.current.value;
    const comfirmPassword = comfirmPasswordRef.current.value;

    if (password !== comfirmPassword) {
      setHasError(true);
      return false;
    }

    if (!email || !password || !username || !comfirmPassword) {
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
          mt: 12,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Register</Typography>
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
          id="username"
          label="username"
          variant="outlined"
          required
          fullWidth
          autoComplete="username"
          inputRef={usernameRef}
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
        <TextField
          margin="normal"
          id="comfirmPassword"
          label="Comfirm Password"
          type="password"
          variant="outlined"
          required
          fullWidth
          autoComplete="current-password"
          inputRef={comfirmPasswordRef}
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
          Create an account
        </Button>

        <Box sx={{ mt: 2, textAlign: "center" }}>
          Already have an account,<Link to="/login"> Log in</Link>
        </Box>
      </Box>
    </Container>
  );
}
