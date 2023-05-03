import '@fontsource/roboto/300.css';
import { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './modals/js/Navbar';
import MainContent from './modals/js/MainContent';

import './App.css';

async function checkLogIn()
{
  
}

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);

  // // MAY HAVE TO: cookie.token ? setLoggedIn = true
  // console.log(cookies.token);
  useEffect(() => {
    console.log("hello useEffect");
  }, []);

  return (
      <div id="main">
        <Navbar loggedIn={loggedIn} />
        <MainContent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
  );
}

export default App;
