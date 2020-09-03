import React, { useState } from 'react'

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';

import Navbar from './components/Navbar'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: teal[900],
        },
        secondary: {
            main: grey[50],
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
        </ThemeProvider>
    );
}

export default App;
