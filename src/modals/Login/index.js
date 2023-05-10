import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './index.css';

async function logIn(inp)
{
  try {
    const res = await fetch('http://localhost:5000/api/login', {
      method: "POST",
      // mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(inp)
    });

    const output = await res.json();
    return output;
  }
  catch (err) {
    console.log(err);

    return { ok: false, message: 'Server problem!' };
  }
}

function Login({ setLoggedIn }) {

  const [ errorMessage, setErrorMessage ] = useState('');

  const navigate = useNavigate();

  async function handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.currentTarget);

      const inp = {
        userName: data.get('userName'),
        password: data.get('password'),
        remember: data.get('remember')
      }
      
      const res = await logIn(inp);

      if(res.ok)
      {
        // localStorage.setItem('userName', inp.userName); // session storage
        setLoggedIn(true);
        navigate('/profile', { replace: true });
      }
      else
        setErrorMessage(res.message);
  };
    
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>👤 Login</h2>
            <hr></hr>

            <form onSubmit={handleSubmit} id="login-form" className="m-auto col-lg-6">

              <div className="form-group">
                <label>Username:</label>
                <input name="userName" defaultValue="buet_cse" type="text" className="form-control" placeholder="Enter your NSHELF username" required />
              </div>

              <div className="form-group">
                <label>Password:</label>
                <input name="password" defaultValue="csebuet#@12B" type="password" className="form-control" placeholder="Enter your NSHELF password" required />
              </div>

              <div className="form-group">
                <div className="form-check">
                  <input name="remember" value="remember" type="checkbox"
                  className="form-check-input" />
                  <label className="form-check-label">Remember Me</label>
                </div>
              </div>

              <p className="text-success">{errorMessage}</p>

              <button type="submit" className="btn btn-primary w-100">Log In</button>
              <br /><br />

              <Link to="">Forgot password?</Link><br />
              <Link to="/signup">Don't have an account? Sign Up</Link>
            
          </form>
        </div>
    );
  }

export default Login;