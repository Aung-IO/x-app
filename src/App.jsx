import { Box, Button } from "@mui/material";
import React from "react";
import AppDrawer from "./components/AppDrawer";


import Header from "./components/Header";
import { useUIState } from "./providers/UIStateProvider";

export default function App() {
  const {openDrawer, setOpenDrawer} = useUIState();
  return (
    <Box>
      <AppDrawer />
      <Header/>
    
    </Box>
  );
}
