import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Dialog, DialogTitle, DialogContent, TextField, Button, Typography, Link} from '@mui/material';
import { Container, Grid, Box} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/LockOutlined';
import { useAuth } from '../../Pages/Context';
import './style.css';

const Login = ({ handleChange })=>{
    const navigate = useNavigate();
    const { login } = useAuth();

    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loginError, setLoginError] = useState(false);
  
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
        setLoginError(false);
    };


    const handleLogin = async () => {
        setUsernameError(false);
        setPasswordError(false);
        setLoginError(false);
        
        if (username.trim() === '') {
            setUsernameError(true);
        } else {
            setUsernameError(false);
        }

        if (password === '') {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        
        if (username.trim() !== '' && password !== '') {
           
                const response = await fetch('https://my-json-server.typicode.com/doaaelzamly/mock-api2/user');
                const users = await response.json();
                const user = users.find(u => u.username === username && u.password === password);

                if (user) {
                    login();
                    handleClose();
                } else {
                    setLoginError(true);
                }
          
        }
    };
  
    return(
    <Box>
            <Grid align='center'>
                <Avatar sx={{ bgcolor: '#007bff' }}><LockIcon/></Avatar>
                <DialogTitle style={{textAlign:'center'}}>Welcome to Homely</DialogTitle>
            </Grid>

            <DialogContent sx={{display:'flex', flexDirection:'column'}} className='loginContent' >
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
                    size="small"
                    style={{
                        margin:'0'
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
                    margin="normal"
                    size="small"
                />
                <Typography>
                    <Link href='g' style={{textDecoration:'none', fontSize:'13px'}}>Forgot Password ?</Link>
                </Typography>
                <br/>
                <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
                    Login
                </Button>

                {loginError && (
                    <Typography variant="body2" color="error">
                        Incorrect username or password.
                    </Typography>
                )}

                
            </DialogContent>
    </Box>
   
    );
}

export default Login

