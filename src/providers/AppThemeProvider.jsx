import CssBaseline from "@mui/material/CssBaseline";
import { deepPurple } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { createContext, useContext, useMemo, useState } from "react";

const AppThemeContext = createContext();

export function useAppTheme() {
  return useContext(AppThemeContext);
}

export default function AppThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(() => {
    return createTheme({
      palette: {
        mode,
        ...(mode === "light"
          ? {
              header: { background: deepPurple[500] },
              banner: { background: "#e1e1e1" },
              login: {background: deepPurple[500] }
            }
          : {
              header: { background: deepPurple[900] },
              banner: { background: "#222" },
              login: { background: deepPurple[700] },
            }),
      },
    });
  }, [mode]);

  return (
    <AppThemeContext.Provider value={{ mode, setMode }}>
    <ThemeProvider theme={theme}>
        <CssBaseline/>
    {children}
    </ThemeProvider>
    </AppThemeContext.Provider>
  );
}
