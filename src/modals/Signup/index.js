import { useState } from 'react';
import { Link } from 'react-router-dom';

import validator from './validator';
import './index.css';

async function register(inp)
{
  try {
    const res = await fetch('http://localhost:5000/api/register', {
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

function Signup() {

  const [ errorMessage, setErrorMessage ] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget); // actually event.target is null, It has property called even.target which is the FORM DOM. Fix this issue latar.

    const inp = {
      userName: data.get('userName'),
      email: data.get('email'),
      password: data.get('password'),
      birthDate: data.get('birthDate'),
      gender: data.get('gender'),
      institution: data.get('institution'),
      TandC: data.get('TandC')
    };

    if(!validator.checkEmail(inp.email))
      setErrorMessage('This email is not allowed!');
    else if(!validator.checkPassword(inp.password))
      setErrorMessage('Try stronger password');
    else
    {
      // SEND DATA TO API
      const res = await register(inp);
      setErrorMessage(res.message);
    }
  }
    
  return (
    <div>
        <h2 style={{ textAlign: 'center' }}>📁 Signup</h2>
        <hr></hr>

        <form id="signup-form" onSubmit={handleSubmit} className="m-auto col-lg-6">

          <div className="form-group">
            <label>Username:</label>
            <input name="userName" type="text" className="form-control" placeholder="some_name" required />
          </div>

          <div className="form-group">
            <label>Email:</label>
            <input name="email" type="email" className="form-control" placeholder="someone@gmail.com" required />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input name="password" type="password" className="form-control" placeholder="Give a stronger password" required />
          </div>

          <div className="form-group">
            <label>Birthdate:</label>
            <input name="birthDate" type="date" className="form-control" required />
          </div>

          <div className="form-group">
            <label>Gender:</label>

            <div className="form-check">
              <input name="gender"value="male" type="radio" className="form-check-input" required />
              <label className="form-check-label">
                Male
              </label>
            </div>

            <div className="form-check">
              <input name="gender"value="female" type="radio" className="form-check-input" />
              <label className="form-check-label">
                Female
              </label>
            </div>

            <div className="form-check">
              <input name="gender"value="other" type="radio" className="form-check-input" />
              <label className="form-check-label">
                Other
              </label>
            </div>
          </div>

        <div className="form-group">
          <label>Institution:</label>
          <input name="institution" type="text" className="form-control" placeholder="Full name of your institution" required />
        </div>

        <div className="form-group">
          <div className="form-check">
            <input name="TandC" value="agreed" className="form-check-input" type="checkbox" required />
            <label className="form-check-label">
              I accept the terms and condtions. 
            </label>
          </div>
        </div>

        <p className="text-success">{errorMessage}</p>

        <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        <br /><br />
        
        <Link to="/login">Already have an account? Log in</Link>
      </form>

      <br />

    </div>
  );
}

export default Signup;