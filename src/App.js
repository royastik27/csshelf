import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, createTheme } from '@mui/material/styles';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import './App.css';

import Header from './modals/js/Header';
import Navbar from './modals/js/Navbar';
import MainContent from './modals/js/MainContent';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

function App() {
  return (
      <div id="main">
        <Navbar />
        <MainContent />
      </div>
  );
}

export default App;
