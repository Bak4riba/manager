import React from 'react';
import { ThemeProvider, createMuiTheme, CssBaseline, } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from './components/ui/Menu'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#210B2C',
        light: '#55286F',
      },
      secondary: {
        main: '#55286F',
        light: '#FFFFFF'
      },
    },
  })

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Menu />
      </ThemeProvider >
    </Router>
  );
}

export default App;
