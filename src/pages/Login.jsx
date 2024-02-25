import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useRef, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

export default function Login() {
  const handleRef = useRef();
  const passwordRef = useRef();

  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setAuth, setAuthUser } = useAuth();
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h4">Login</Typography>
      <Box sx={{ mt: 4 }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const handle = handleRef.current.value;
            const password = passwordRef.current.value;

            if (!handle || !password) {
              setHasError(true);
              setErrorMessage("Please enter a handle and password.");
              return false;
            }
            (async () => {
              const api = import.meta.env.VITE_API_URL;
              const res = await fetch(`${api}/login`, {
                method: "POST",
                body: JSON.stringify({ handle, password }),
                headers: { "Content-Type": "application/json" },
              });

              if (!res.ok) {
                setHasError(true);
                setErrorMessage("Invalid handle or password.");
                return false;
              }
              const data = await res.json();
              localStorage.setItem("token", data.token);

              fetch(`${api}/verify`, {
                headers: {
                  Authorization: `Bearer ${data.token}`,
                },
              })
                .then((res) => res.json())
                .then((user) => {
                  setAuth(true);
                  setAuthUser(user);
                  navigate("/");
                });
            })();
          }}
        >
          <TextField
            label="Handle"
            fullWidth
            sx={{ mb: 2 }}
            required
            inputRef={handleRef}
          />
          <TextField
            label="Password"
            fullWidth
            type="password"
            required
            sx={{ mb: 2 }}
            inputRef={passwordRef}
          />

          <Button type="submit" variant="contained" fullWidth>
            Login
          </Button>
          {hasError && (
            <Alert severity="warning" sx={{ mb: 4 }}>
              {errorMessage}
            </Alert>
          )}
        </form>
        <Box sx={{ mt: 2, textAlign: "center" }}>
          <Link to="/register">Register</Link>
        </Box>
      </Box>
    </Box>
  );
}
