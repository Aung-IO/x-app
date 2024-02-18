import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import AppDrawer from "./components/AppDrawer";

import Header from "./components/Header";

export default function Layout() {
  return (
    <Box>
      <AppDrawer />
      <Header />
      <Container maxWidth="sm" sx={{ md: 4 }}>
        <Outlet />
      </Container>
    </Box>
  );
}
