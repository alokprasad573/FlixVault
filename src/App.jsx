import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material';
import Home from "./pages/Home";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E50914',
    },
    background: {
      default: '#141414',
      paper: '#181818',
    },
  },
  typography: {
    fontFamily: '"Helvetica Neue", Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#141414',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#E50914',
            borderRadius: '4px',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, #141414 0%, #181818 100%)',
          pt: '64px', // Add padding top to account for fixed header
        }}
      >
        <Home />
      </Box>
    </ThemeProvider>
  );
}

export default App;
