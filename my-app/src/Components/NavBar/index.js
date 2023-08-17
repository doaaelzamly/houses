import React from 'react';
import AppBar from '@mui/material/AppBar';
import {Box, IconButton, Tooltip, Button} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from '../../Util/imgs/logo.png';

import './style.css';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  return (
    <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none'}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }}>
                <img src={logo} alt='logo' className='logo'/>
              </IconButton>
            </Tooltip>
        </Box>

        <Box sx={{ flexGrow: 1 }} />

        <Button variant="contained" className='btnLogin'>Sign in/ Sign up</Button>
      
      </Toolbar>
    </Container>
  </AppBar>
  );
}
export default NavBar;


