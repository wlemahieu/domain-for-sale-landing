/**
 * App structure, session fetch, socket listeners
 */
import { FC } from 'react';
import Home from '@views/Home';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Fredoka One',
    h1: {
      fontSize: '66px',
      fontWeight: 100,
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Home />
    </ThemeProvider>
  );
};

export default App;
