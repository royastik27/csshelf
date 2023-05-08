import '@fontsource/roboto/300.css';
import { useState, useEffect } from 'react';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './modals/js/Navbar';
import MainContent from './modals/js/MainContent';

import './App.css';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);

  useEffect(() => {
    // console.log("hello useEffect");

    async function isLoggedIn()
    {
      try {
        const res = await fetch('http://localhost:5000/api/getuserdetails', {
          method: "POST",
          // mode: 'cors',
          headers: {
            'Content-type': 'application/json'
          }
        });
    
        const output = await res.json();
        
        // console.log(output);

        if(output.ok)
          setLoggedIn(true);
      }
      catch (err) {
        // console.log(err);
        console.log('Server problem: Cannot check previous login.');
      }
    }

    isLoggedIn();
  }, []);

  return (
      <div id="main">
        <Navbar loggedIn={loggedIn} />
        <MainContent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
  );
}

export default App;
