import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography, Link} from '@mui/material';
import { Container, Grid, Box} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import './style.css';

const Signup = ({ handleChange })=>{

    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      resetForm();
    };

    const resetForm = () => {
        setUsername('');
        setPassword('');
        setUsernameError(false);
        setPasswordError(false);
      
    };
    const handleLogin = async () => {
      setUsernameError(true);
      setPasswordError(true);
      
      if (username.trim() === '') {
          setUsernameError(true);
      } else {
          setUsernameError(false);
      }

      if (password === '' || password.length !== 8 ) {
          setPasswordError(true);
      } else {
          setPasswordError(false);
      }
  };
  
    return(
    <Box>
            <Grid align='center'>
                <Avatar sx={{ bgcolor: '#007bff' }}><AddIcon/></Avatar>
                <DialogTitle style={{textAlign:'center', padding:'6px'}}>Welcome to Homely</DialogTitle>
            </Grid>

            <DialogContent sx={{display:'flex', flexDirection:'column'}} className='signUpContent' >
                <TextField
                    label="Username"
                    value={username}
                    fontSize='5px'
                    error={usernameError}
                    helperText={usernameError ? 'Username is required' : ''}
                    onChange={(e) => {
                        setUsername(e.target.value);
                        setUsernameError(false);
                    }}
                    fullWidth
                    required
                    margin='0'
                    size="small"
                />
                <TextField
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    size="small"
                    style={{
                      marginTop: '9px'
                    }}
                />
                <TextField
                    label="Phone"
                    type="numbr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    fullWidth
                    size="small"
                    style={{
                      marginTop: '9px'
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    error={passwordError}
                    helperText={passwordError ? 'Password is required' : ''}
                    onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError(false);
                    }}
                    fullWidth
                    required
                    size="small"
                    style={{
                      marginTop: '9px'
                    }}
                />
                <TextField
                    label="Confirm password"
                    type="password"
                    value={ConfirmPassword}
                    error={passwordError}
                    helperText={passwordError ? 'Password is required' : ''}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value);
                        setConfirmPassword(false);
                    }}
                    fullWidth
                    required
                    size="small"
                    style={{
                      marginTop: '9px'
                    }}
                />
              
                <Button variant="contained" color="primary" onClick={handleLogin} fullWidth style={{marginTop:'5px'}}>
                    Sign Up
                </Button>
                <Typography  variant="body2" textAlign="center" className='textSignup1'>By submitting, I accept the Terms of Use.</Typography>
            </DialogContent>
    </Box>
   
    );
}

export default Signup
