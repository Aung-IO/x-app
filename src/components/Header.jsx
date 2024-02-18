import {
  DarkMode,
  LightMode,
  Menu,
  Notifications,
  X,
} from "@mui/icons-material";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import React from "react";
import { useAppTheme } from "../providers/AppThemeProvider";
import { useUIState } from "../providers/UIStateProvider";

export default function Header() {
  const { setOpenDrawer } = useUIState();
  const { mode, setMode } = useAppTheme();
  return (
    <AppBar position="static" sx={{ bgcolor: "header.background" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => setOpenDrawer(true)}
        >
          <Menu />
        </IconButton>
        <X />
        <Box>
          {mode === "dark" ? (
            <IconButton color="inherit" onClick={() => setMode("light")}>
              <LightMode />
            </IconButton>
          ) : (
            <IconButton color="inherit" onClick={() => setMode("dark")}>
              <DarkMode />
            </IconButton>
          )}
          <IconButton color="inherit" edge="end">
            <Notifications />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
