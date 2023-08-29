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
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    return(
    <Box>
            <Grid align='center'>
                <Avatar sx={{ bgcolor: '#007bff' }}><AddIcon/></Avatar>
                <DialogTitle style={{textAlign:'center'}}>Welcome to Homely</DialogTitle>
            </Grid>

            <DialogContent sx={{display:'flex', flexDirection:'column'}} className='signUpContent' >
                <TextField
                    label="Username"
                    value={username}
                    fontSize='5px'
                    onChange={(e) => setUsername(e.target.value)}
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
                      marginTop: '10px'
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
                      marginTop: '10px'
                    }}
                />
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    required
                    size="small"
                    style={{
                      marginTop: '10px'
                    }}
                />
                <TextField
                    label="Confirm password"
                    type="password"
                    value={ConfirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    required
                    size="small"
                    style={{
                      marginTop: '10px'
                    }}
                />
              
                <br/>
                <Button variant="contained" color="primary" onClick={handleClose} fullWidth>
                    Sign Up
                </Button>
                <Typography  variant="body2" textAlign="center" className='textSignup1'>By submitting, I accept the Terms of Use.</Typography>
            </DialogContent>
    </Box>
   
    );
}

export default Signup

