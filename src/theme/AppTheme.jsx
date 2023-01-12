import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from '@mui/material/CssBaseline';
import { mainTheme, redTheme } from './';

export const AppTheme = ({children}) => {
  return (
     <ThemeProvider theme={mainTheme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </ThemeProvider>
  )
}
