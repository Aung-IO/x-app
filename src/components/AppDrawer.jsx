import { Box, Drawer } from "@mui/material";

import React from "react";
import { useUIState } from "../providers/UIStateProvider";

export default function AppDrawer() {
  const {openDrawer, setOpenDrawer} = useUIState();
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
    >
      <Box sx={{ width: 300 }}></Box>
    </Drawer>
  );
}
