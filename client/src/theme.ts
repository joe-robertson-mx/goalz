import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#052C49',
      white: '#FFFFFF',
      orinj: '#EB9F53'
    },
    secondary: {
      main: '#4B2E5C',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;