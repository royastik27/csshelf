import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';
import Link from '@mui/material/Link';

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

import './index.css';

function Signup() {

  const handleSubmit = async (event) => {
      event.preventDefault();

      const data = new FormData(event.currentTarget); // actually event.target is null, It has property called even.target which is the FORM DOM. Fix this issue latar.

      const bodyData = JSON.stringify({
        userName: data.get('userName'),
        email: data.get('email'),
        password: data.get('password'),
        birthDate: data.get('birthDate'),
        gender: data.get('gender'),
        institution: data.get('institution'),
      });
      
      try {
        const res = await fetch('http://localhost:5000/api/adduser', {
              method: "POST",
              // mode: 'cors',
              headers: {
                'Content-type': 'application/json'
              },
              body: bodyData
        });
        console.log(res);
      }
      catch(err) {
        console.log('Failed to fetch data from server');
        // console.log(err);
      }
    };
    
  return (
    <div>
        <h2 style={{ textAlign: 'center' }}>📁 Signup</h2>
        <hr></hr>

        <Box component="form" onSubmit={handleSubmit} sx={{ m: 'auto', maxWidth: 400 }}> { /** noValidate attribute */ }

        <TextField
          margin="normal"
          fullWidth
          autoFocus
          label="Username"
          id="userName"
          name="userName"
        />

        <TextField
          margin="normal"
          fullWidth
          label="Email Address"
          id="email"
          type="email"
          name="email"
        />

        <TextField
          margin="normal"
          fullWidth
          label="Password"
          name="password"
          type="password"
          id="password"
        /><br></br>

        <InputLabel>Birthdate:</InputLabel>
        <TextField
          margin="normal"
          fullWidth
          name="birthDate"
          type="date"
          id="birthDate"
        />
        
        {/* GENDER */}
        <InputLabel>Gender</InputLabel>
        <RadioGroup
          row
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="male"
          name="gender"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>

        {/* INSTITUTION */}
        <TextField
          margin="normal"
          fullWidth
          label="Institution"
          name="institution"
          id="institution"
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>

        <Link href="/login" variant="body2">
              {"Already have an account? Log in"}
        </Link>

      </Box>

    </div>
  );
}

export default Signup;