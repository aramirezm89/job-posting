import { createTheme } from "@mui/material";
import {red} from '@mui/material/colors'
export const redTheme = createTheme({
  palette: {
    primary: {
      main: "#BB2333",
      
    },
    secondary: {
      main: "#263238",
    },
    error: {
      main: red.A400,
    },
  },
});
