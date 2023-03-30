import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import './index.css';

function Signup() {
  const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        email: data.get('email'),
        password: data.get('password'),
      });
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
        />

        <TextField
          margin="normal"
          fullWidth
          label="Birthdate"
          name="birthDate"
          type="date"
          id="birthDate"
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