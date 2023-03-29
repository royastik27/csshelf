import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';

import Header from './modals/js/Header';
import Navbar from './modals/js/Navbar';
import MainContent from './modals/js/MainContent';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <div id="main">
        <Header />
        <Navbar />
        <MainContent />
      </div>
    </ThemeProvider>
  );
}

export default App;
