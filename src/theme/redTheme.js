import { createTheme } from "@mui/material";
import {red} from '@mui/material/colors'
export const redTheme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
      contrastText:'white'
    },
    secondary: {
      main: "#263238",
    },
    error: {
      main: red.A400,
    },
  },
});
