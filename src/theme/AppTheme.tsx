import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { ReactNode } from "react";
import { purpleTheme } from "./purpleTheme";

type AppThemeProps = { children: ReactNode };
export const AppTheme = ({ children }: AppThemeProps) => {
  return (
    <ThemeProvider theme={ purpleTheme }>
    <CssBaseline />
    { children }
    </ThemeProvider>
  )
}


